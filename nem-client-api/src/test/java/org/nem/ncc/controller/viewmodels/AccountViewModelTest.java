package org.nem.ncc.controller.viewmodels;

import net.minidev.json.*;
import org.hamcrest.core.*;
import org.junit.*;
import org.nem.core.model.*;
import org.nem.core.model.ncc.*;
import org.nem.core.model.primitive.*;
import org.nem.core.serialization.JsonSerializer;
import org.nem.ncc.test.*;

import java.util.List;
import java.util.stream.*;

// TODO 20150131 J-G: should update tests to deal with cosignatories
// TODO 20150202 BR -> J: hope the way i did it is the way you expected it to be.

public class AccountViewModelTest {

	@Test
	public void viewModelCanBeCreatedAroundAccountAndStatus() {
		// Arrange:
		final AccountInfo account = createAccountInfo(null, Address.fromEncoded("xyz"));
		final List<AccountInfo> cosignatoriesOf = createCosignatories();

		// Act:
		final AccountViewModel viewModel = createAccountViewModel(account, cosignatoriesOf);

		// Assert:
		Assert.assertThat(viewModel.getAddress(), IsEqual.equalTo(Address.fromEncoded("xyz")));
		Assert.assertThat(viewModel.getRemoteStatus(), IsEqual.equalTo(AccountRemoteStatus.INACTIVE));
		Assert.assertThat(viewModel.getBalance(), IsEqual.equalTo(Amount.fromNem(271)));
		Assert.assertThat(viewModel.getHarvestedBlocks(), IsEqual.equalTo(new BlockAmount(3)));
		Assert.assertThat(viewModel.getImportance(), IsEqual.equalTo(3.7));
		Assert.assertThat(viewModel.getPublicKey(), IsNull.nullValue());
		Assert.assertThat(viewModel.getStatus(), IsEqual.equalTo(AccountStatus.LOCKED));
		Assert.assertThat(viewModel.getCosignatoriesOf(), IsEquivalent.equivalentTo(cosignatoriesOf));
	}

	@Test
	public void viewModelCanBeCreatedAroundAccountWithPublicKey() {
		// Arrange:
		final Address address = Utils.generateRandomAddressWithPublicKey();
		final AccountInfo account = createAccountInfo(null, address);

		// Act:
		final AccountViewModel viewModel = createAccountViewModel(account, createCosignatories());

		// Assert:
		Assert.assertThat(viewModel.getPublicKey(), IsNull.notNullValue());
		Assert.assertThat(viewModel.getPublicKey(), IsEqual.equalTo(address.getPublicKey()));
	}

	@Test
	public void viewModelCanBeCreatedAroundAccountMetaDataPair() {
		// Arrange:
		final AccountInfo account = createAccountInfo(null, Address.fromEncoded("xyz"));

		final AccountMetaDataPair pair = new AccountMetaDataPair(
				account,
				new AccountMetaData(AccountStatus.LOCKED, AccountRemoteStatus.INACTIVE, createCosignatories()));

		// Act:
		final AccountViewModel viewModel = new AccountViewModel(pair);

		// Assert:
		Assert.assertThat(viewModel.getAddress(), IsEqual.equalTo(Address.fromEncoded("xyz")));
		Assert.assertThat(viewModel.getRemoteStatus(), IsEqual.equalTo(AccountRemoteStatus.INACTIVE));
		Assert.assertThat(viewModel.getBalance(), IsEqual.equalTo(Amount.fromNem(271)));
		Assert.assertThat(viewModel.getHarvestedBlocks(), IsEqual.equalTo(new BlockAmount(3)));
		Assert.assertThat(viewModel.getImportance(), IsEqual.equalTo(3.7));
		Assert.assertThat(viewModel.getPublicKey(), IsNull.nullValue());
		Assert.assertThat(viewModel.getStatus(), IsEqual.equalTo(AccountStatus.LOCKED));
		Assert.assertThat(viewModel.getCosignatoriesOf(), IsEquivalent.equivalentTo(pair.getMetaData().getCosignatoryOf()));
	}

	@Test
	public void viewModelCanBeSerialized() {
		// Arrange:
		final Address address = Utils.generateRandomAddressWithPublicKey();
		final AccountInfo account = createAccountInfo(null, address);

		final AccountViewModel viewModel = createAccountViewModel(account, createCosignatories());

		// Act:
		final JSONObject jsonObject = JsonSerializer.serializeToJson(viewModel);

		// Assert:
		Assert.assertThat(jsonObject.size(), IsEqual.equalTo(8));
		Assert.assertThat(jsonObject.get("address"), IsEqual.equalTo(account.getAddress().getEncoded()));
		Assert.assertThat(jsonObject.get("remoteStatus"), IsEqual.equalTo("INACTIVE"));
		Assert.assertThat(jsonObject.get("publicKey"), IsEqual.equalTo(address.getPublicKey().toString()));
		Assert.assertThat(jsonObject.get("balance"), IsEqual.equalTo(271000000L));
		Assert.assertThat(jsonObject.get("importance"), IsEqual.equalTo(3.7));
		Assert.assertThat(jsonObject.get("harvestedBlocks"), IsEqual.equalTo(3L));
		Assert.assertThat(jsonObject.get("status"), IsEqual.equalTo("LOCKED"));
		assertCosignatoriesMatch((JSONArray)jsonObject.get("cosignatoriesOf"), viewModel.getCosignatoriesOf());
	}

	private void assertCosignatoriesMatch(final JSONArray jsonCosignatories, final List<AccountInfo> originalCosignatories) {
		for (int i = 0; i < jsonCosignatories.size(); i++) {
			assertAccountInfoMatches((JSONObject)jsonCosignatories.get(i), originalCosignatories.get(i));
		}
	}

	private void assertAccountInfoMatches(final JSONObject jsonAccountInfo, final AccountInfo originalAccountInfo) {
		Assert.assertThat(jsonAccountInfo.size(), IsEqual.equalTo(6));
		Assert.assertThat(jsonAccountInfo.get("address"), IsEqual.equalTo(originalAccountInfo.getAddress().getEncoded()));
		Assert.assertThat(jsonAccountInfo.get("publicKey"), IsEqual.equalTo(null));
		Assert.assertThat(jsonAccountInfo.get("balance"), IsEqual.equalTo(originalAccountInfo.getBalance().getNumMicroNem()));
		Assert.assertThat(jsonAccountInfo.get("importance"), IsEqual.equalTo(originalAccountInfo.getImportance()));
		Assert.assertThat(jsonAccountInfo.get("harvestedBlocks"), IsEqual.equalTo(originalAccountInfo.getNumHarvestedBlocks().getRaw()));
		Assert.assertThat(jsonAccountInfo.get("label"), IsEqual.equalTo(originalAccountInfo.getLabel()));
	}

	private static AccountViewModel createAccountViewModel(final AccountInfo account, final List<AccountInfo> cosignatoriesOf) {
		return new AccountViewModel(
				account,
				AccountStatus.LOCKED,
				AccountRemoteStatus.INACTIVE,
				cosignatoriesOf);
	}

	private static AccountInfo createAccountInfo(final String label, final Address address) {
		return new AccountInfo(
				address,
				Amount.fromNem(271),
				new BlockAmount(3),
				label,
				3.7);
	}

	private static List<AccountInfo> createCosignatories() {
		return IntStream.range(0, 3)
				.mapToObj(i -> createAccountInfo(String.format("cosignatory%d", i + 1), Utils.generateRandomAddress()))
				.collect(Collectors.toList());
	}
}