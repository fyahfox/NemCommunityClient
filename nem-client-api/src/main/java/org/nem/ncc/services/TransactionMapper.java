package org.nem.ncc.services;

import org.nem.core.crypto.*;
import org.nem.core.messages.*;
import org.nem.core.model.*;
import org.nem.core.model.primitive.Amount;
import org.nem.core.serialization.AccountLookup;
import org.nem.core.time.*;
import org.nem.core.utils.StringEncoder;
import org.nem.ncc.controller.requests.*;
import org.nem.ncc.controller.viewmodels.PartialTransferInformationViewModel;
import org.nem.ncc.exceptions.NccException;
import org.nem.ncc.wallet.*;

/**
 * Helper class that is able to map a TransactionViewModel to a Transaction.
 */
public class TransactionMapper {
	private final WalletServices walletServices;
	private final AccountLookup accountLookup;
	private final TimeProvider timeProvider;

	/**
	 * Creates a new transaction mapper.
	 *
	 * @param walletServices The wallet services.
	 * @param accountLookup The account lookup.
	 * @param timeProvider The time provider.
	 */
	public TransactionMapper(
			final WalletServices walletServices,
			final AccountLookup accountLookup,
			final TimeProvider timeProvider) {
		this.walletServices = walletServices;
		this.accountLookup = accountLookup;
		this.timeProvider = timeProvider;
	}

	/**
	 * Converts the specified request to a model.
	 *
	 * @param request The request.
	 * @return The model.
	 */
	public Transaction toModel(final TransferSendRequest request) {
		final TransferTransaction transaction = this.toModel(request, request.getPassword());
		transaction.setFee(request.getFee());
		return transaction;
	}

	/**
	 * Converts the specified request to a view model.
	 * TODO 20141025 J-J: not sure if this makes sense in this class
	 *
	 * @param request The request.
	 * @return The view model.
	 */
	public PartialTransferInformationViewModel toViewModel(final PartialTransferInformationRequest request) {
		// use a fake accounts so that encryption and signing are always possible
		final Account fakeAccount = new Account(new KeyPair());
		final Message message = this.createMessage(request.getMessage(), request.shouldEncrypt(), fakeAccount, fakeAccount);

		// if the amount isn't provided, assume a zero amount
		final Amount amount = null == request.getAmount() ? Amount.ZERO : request.getAmount();
		final TransferTransaction transaction = new TransferTransaction(
				TimeInstant.ZERO,
				fakeAccount,
				fakeAccount,
				amount,
				message);

		return new PartialTransferInformationViewModel(
				transaction.getFee(),
				null != request.getRecipientAddress() && null != this.accountLookup.findByAddress(request.getRecipientAddress()).getKeyPair());
	}

	/**
	 * Converts the specified request to a model.
	 *
	 * @param request The request.
	 * @return The model.
	 */
	public Transaction toModel(final TransferImportanceRequest request, final ImportanceTransferTransaction.Mode mode) {
		final Account sender = this.getSenderAccount(request.getWalletName(), request.getAccountId(), request.getPassword());
		final Account remoteAccount = this.getRemoteAccount(request.getWalletName(), request.getAccountId(), request.getPassword());

		final TimeInstant timeStamp = this.timeProvider.getCurrentTime();
		final ImportanceTransferTransaction transaction = new ImportanceTransferTransaction(
				timeStamp,
				sender,
				mode,
				remoteAccount);

		transaction.setDeadline(timeStamp.addHours(request.getHoursDue()));
		return transaction;
	}

	private TransferTransaction toModel(final TransferSendRequest request, final WalletPassword password) {
		final Account sender = this.getSenderAccount(request.getWalletName(), request.getSenderAddress(), password);
		final Account recipient = this.accountLookup.findByAddress(request.getRecipientAddress());
		final Message message = this.createMessage(request.getMessage(), request.shouldEncrypt(), sender, recipient);

		final TimeInstant timeStamp = this.timeProvider.getCurrentTime();
		final TransferTransaction transaction = new TransferTransaction(
				timeStamp,
				sender,
				recipient,
				request.getAmount(),
				message);

		transaction.setDeadline(timeStamp.addHours(request.getHoursDue()));
		return transaction;
	}

	private Account getSenderAccount(final WalletName walletName, final Address accountId, final WalletPassword password) {
		final PrivateKey privateKey = this.getSenderWallet(walletName, password).getAccountPrivateKey(accountId);
		return new Account(new KeyPair(privateKey));
	}

	private Account getRemoteAccount(final WalletName walletName, final Address accountId, final WalletPassword password) {
		final Wallet wallet = this.getSenderWallet(walletName, password);
		final WalletAccount account = wallet.tryGetWalletAccount(accountId);
		final PrivateKey privateKey = account.getRemoteHarvestingPrivateKey();
		return new Account(new KeyPair(privateKey));
	}

	private Wallet getSenderWallet(final WalletName walletName, final WalletPassword password) {
		final Wallet wallet = this.walletServices.open(new WalletNamePasswordPair(walletName, password));
		if (null == wallet) {
			throw new IllegalArgumentException("unable to open wallet");
		}

		return wallet;
	}

	private Message createMessage(
			final String message,
			final boolean shouldEncrypt,
			final Account sender,
			final Account recipient) {
		if (null == message) {
			return null;
		}

		final byte[] messageBytes = StringEncoder.getBytes(message);
		if (!shouldEncrypt) {
			return new PlainMessage(messageBytes);
		}

		final KeyPair keyPair = recipient.getKeyPair();
		if (null == keyPair) {
			throw new NccException(NccException.Code.NO_PUBLIC_KEY);
		}

		return SecureMessage.fromDecodedPayload(sender, recipient, messageBytes);
	}
}
