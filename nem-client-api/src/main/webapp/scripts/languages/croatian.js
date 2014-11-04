define({
	id: 'hr',
	name: 'hrvatski',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Datoteka nije pronađena.',
			102: 'Novčanik nije stvoren.',
			103: 'Datoteka novčanika je oštećena. Molim Vas povratite novčanik iz sigurnosne kopije koju ste trebali napraviti prilikom stvaranja novčanika ili dodavanja računa.',
			104: 'Unesena lozinka je netočna. Nadam se da se možete sjetiti točne lozinke jer izgubljenu lozinku je nemoguće povratiti!',
			106: 'Novčanik mora biti otvoren da biste ga mogli koristiti. Morate unijeti lozinku za novčanik da biste bili sigurni da ste ovlašteni za korištenje istog.',
			107: 'Novčanik ne sadrži taj račun.',
			108: 'Nemoguće je ukloniti račun jer je iznos na njemu veći od 0 NEM-ova ili jer pokušavate ukloniti primarni račun.',
			109: 'Drugi novčanik sa istim nazivom već postoji. Molim Vas izaberite drugi naziv za novčanik.',
			110: 'Novčanik već sadrži taj račun.',
			202: 'Šifrirana se poruka nije mogla poslati jer primatelj nije nikad napravio niti jednu transakciju.',
			305: 'NEM infrastrukturni poslužitelj nije dostupan.',
			306: 'Došlo je do pogreške koju razvojni tim nije predvidio. Ispričavamo se zbog toga. Novi pokušaj bi mogao pomoći, u suprotnom molim Vas pošaljite upit NEM NIS/NCC zajednici.',
			400: 'Neki parametar nedostaje ili je nevažeći.',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'Zatraženi resurs nije mogao biti pronađen.',
			500: 'Greška prilikom spremanja konfiguracijske datoteke.',
			600: 'Za slanje i primanje transakcija sa NEM oblaka, NCC zahtijeva da NIS poslužitelj bude pokrenut. Molim Vas da u NCC izborniku koristite stavku za pokretanje lokalnog čvora.',
			601: 'NIS čvor je već pokrenut. Sljedeći pokušaj za pokretanje NIS čvora nije moguć.',
			700: 'Navedeni račun ne ispunjava osnovne kriterije za ubiranje blokova. Za ubiranje blokova račun mora sadržavati najmanje 1000 NEM-ova.',
			701: 'Datum isteka je u prošlosti. Datum isteka mora biti u roku od jednog dana.',
			702: 'Datum isteka je predaleko u budućnosti. Datum isteka mora biti u roku od jednog dana.',
			703: 'Stanje na Vašem računu nije dovoljno za slanje određenog iznosa NEMa.',
			704: 'Tekst u poruci je predugačak. Molim Vas, probajte smanjiti dužinu teksta u Vašoj poruci ako ju želite slati.',
			705: 'Šifra transakcije već postoji u bazi podataka ili u listi nepotvrđenih transakcija.',
			706: 'Potpis transakcije nije mogao biti provjeren.',
			707: 'Vremenska oznaka transakcije je predaleko u prošlosti.',
			708: 'Vremenska oznaka transakcije je predaleko u budućnosti.',
			709: 'Račun je nepoznat. Račun se mora pojaviti barem u jednoj transakciji (pošiljatelja ili primatelja) da bi bio prepoznat u mreži.',
			901: 'Došlo je do pogreške kod postavljanja u izvanmrežni način rada.',
			1000: "The private key and the public key you have provided mismatch.",
			1001: 'The public key and the address you have provided mismatch.',
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: 'Uspjeh', //title of the Success message modals
			appStatus: {
				nccUnknown: 'NCC status is unknown',
				nccUnavailable: 'NCC je nedostupan',
				nccStarting: 'NCC is starting...',
				nisUnknown: 'NIS status is unknown',
				nisUnavailable: 'NIS je nedostupan',
				nisStarting: 'NIS is starting...',
				notBooted: 'NIS requires to be booted. Please open your wallet and boot a local node via the popup dialog or configure the auto-boot setting.',
				booting: 'Booting NIS...',
				nisInfoNotAvailable: 'NIS info is not avaiable yet. Trying to retrieve NIS info...',
				synchronizing: 'NIS sinkronizacija. Na bloku {{1}}, otprilike {{2}} u zaostatku.',
				daysBehind: {
					0: 'manje od 1 dan',
					1: '1 dan',
					many: '{{1}} dana'
				},
				synchronized: 'NIS is synchronized!'
			}
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'GREŠKA {{1}}'
			},
			confirmDefault: {
				yes: 'Da',
				no: 'Ne'
			},
			settings: {
				title: 'Settings',
				language: {
					label: 'Language'
				},
				remoteServer: {
					tabTitle: 'Remote Server',
					protocol: 'Protocol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Node name',
					account: 'Account',
					primaryAccount: 'Primary Account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			sendNem: {
				title: 'Slanje NEMa',
				labelDesc: 'Ovaj račun je označen kao {{1}}',
				nullLabelDesc: "Ovaj račun nema oznake",
				amount: 'Iznos',
				recipient: "Račun primatelja",
				message: 'Poruka',
				encrypt: 'Šifriraj poruku',
				fee: 'Naknada',
				dueBy: 'zbog',
				resetFee: 'Postavi na najmanju naknadu',
				hours: 'sati',
				password: 'Lozinka',
				send: 'Šalji',
				sending: 'Slanje...',
				successMessage: 'Transakcija je uspješno provedena!',
				txConfirm: {
					title: 'Confirm Transaction',
					amount: 'Amount',
					to: 'To',
					fee: 'Fee',
					dueBy: 'Due by',
					hours: 'hour(s)',
					total: 'Total',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',
					cancel: 'Cancel',
					confirm: 'Confirm',
					sending: 'Sending...'
				},
				notBootedWarning: {
					title: 'Čvor nije pokrenut!',
					message: 'Lokalni čvor mora biti pokrenut da biste mogli slati NEM!'
				},
				bootingWarning: {
					title: 'Node is being booted',
					message: 'Please wait until booting process is done to send your transaction.'
				}
			},
			clientInfo: {
				title: 'Informacije klijenta',
				ncc: 'NEM Community Client - NCC',
				signer: 'Potpisnik',
				remoteServer: 'Udaljeni poslužitelj',
				local: 'Lokalno',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Sinkroniziran',
				notSync: 'Nije sinkroniziran',
				notConnected: 'Nije spojen na NEM oblak',
				loading: 'Učitavanje...'
			},
			transactionDetails: {
				title: 'Detalji transakcije',
				// this might be block or transaction ID
				id: 'ID',
				// this might be block or transaction Hash
				hash: 'Hash',
				type: 'Tip transakcije',
				pending: 'U tijeku',
				outgoing: 'Odlazno',
				incoming: 'Dolazno',
				self: 'Self',
				sender: 'Pošiljatelj',
				recipient: 'Primatelj',
				message: 'Poruka',
				noMessage: 'Nema poruka',
				encrypted: 'Poruka je šifrirana',
				time: 'Vremenski zapis',
				confirmations: 'Potvrde',
				amount: 'Iznos',
				fee: 'Naknada'
			},
			bootLocalNode: {
				title: 'Pokreni lokalni čvor',
				account: 'Račun za pokretanje lokalnog čvora',
				noLabel: '<span class="null">&lt;Nema oznake&gt;</span>',
				wallet: 'Novčanik',
				node: 'Naziv čvora',
				boot: 'Pokreni',
				booting: 'Pokretanje...'
			},
			closeWallet: {
				title: 'Zatvori novčanik',
				message: 'Jeste li sigurni da želite zatvoriti novčanik i vratiti se na početnu stranicu?'
			},
			createAccount: {
				title: 'Stvori novi račun',
				label: 'Privatna oznaka',
				wallet: 'Novčanik',
				password: "Lozinka novčanika",
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno stvoren!',
				create: 'Stvori'
			},
			createRealAccountData: {
				title: 'Create real account data',
				message: 'The below data is for your real account after NEM launches. Save the the address, the public key, and most importantly the private key somewhere safe. If you lose the private key, your account and all your real NEMs will be lost FOREVER!',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				confirm: {
					title: 'Save the private key',
					message: 'Are you sure your private key has been saved into a safe place?'
				},
				recheck: {
					title: 'Re-check your saved private key',
					message: "Please re-enter your private key you've just been provided to check if you have the correct one saved. If your private key is already lost, you may want to create a new one.",
					correct: {
						title: 'Nice!',
						message: 'You seem to have your correct private key saved. Please remember to always keep it safe and secured!'
					},
					incorrect: {
						title: 'Hmm...',
						message: "The private key you've just entered is not correct! Please double check and enter it once again.",
						tryAgain: 'Try to enter again',
						seeOriginal: 'See the original data'
					},
					recheck: 'Check'
				},
				ok: 'OK'
			},
			verifyRealAccountData: {
				title: 'Verify real account data',
				message: 'Re-enter your saved address, public key and private key below to check if they match',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				dataMatched: 'Everything seems good, your entered address, public key, and private key match.',
				verify: 'Verify'
			},
			addAccount: {
				title: 'Dodaj postojeći račun',
				privateKey: "Privatni ključ računa",
				wallet: 'Novčanik',
				password: "Lozinka novčanika",
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno dodan u novčanik!',
				add: 'Dodaj',
				label: 'Oznaka'
			},
			setPrimary: {
				title: 'Postavi primarni račun',
				account: 'Račun koji će biti postavljen kao primarni',
				noLabel: '<span class="null">&lt;Nema oznake&gt;</span>',
				wallet: 'Novčanik',
				password: "Lozinka novčanika",
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je postavljen kao primarni!',
				set: 'Postavi kao primarni',
			},
			changeWalletName: {
				title: 'Izmijeni naziv novčanika',
				wallet: 'Trenutni naziv novčanika',
				newName: 'Novi naziv novčanika',
				password: "Lozinka novčanika",
				successMessage: 'Naziv novčanika je uspješno izmijenjen iz <em>{{1}}</em> u <em>{{2}}</em>',
				change: 'Izmijeni'
			},
			changeWalletPassword: {
				title: 'Izmijeni lozinku novčanika',
				wallet: 'Novčanik',
				password: 'Trenutna lozinka',
				newPassword: 'Nova lozinka',
				confirmPassword: 'Potvrdi novu lozinku',
				successMessage: 'Lozinka novčanika je uspješno izmijenjena',
				change: 'Izmijeni',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Unesena lozinka i potvrda lozinke se ne podudaraju. Molimo Vas da upišete novu lozinku ispravno.'
			},
			changeAccountLabel: {
				title: 'Izmijeni oznaku računa',
				label: 'Oznaka računa',
				wallet: 'Novčanik',
				password: "Lozinka novčanika",
				successMessage: 'Račun {{1}} je sad označen kao {{2}}',
				change: 'Izmijeni'
			},
			removeAccount: {
				title: 'Ukloni račun',
				wallet: 'Novčanik',
				password: "Lozinka novčanika",
				warning: 'Molim Vas da prije uklanjanja računa provjerite da isti ne sadrži NEM ili će biti izgubljen zauvijek nakon uklanjanja računa.',
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno uklonjen!',
				remove: 'Ukloni'
			},
			nisUnavailable: {
				title: 'NIS nedostupan',
				message: 'Odspojen od NIS-a, čekanje na vezu'
			},
			shutdown: {
				title: 'Zatvori program',
				message: 'Jeste li sigurni za želite zatvoriti NEM Community Client?'
			},
			activateRemote: {
				title: 'Activate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Hours due',
				password: "Wallet's password",
				activate: 'Activate'
			},
			deactivateRemote: {
				title: 'Deactivate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Hours due',
				password: "Wallet's password",
				deactivate: 'Deactivate'
			},
			startRemote: {
				title: 'Start Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				stop: 'Stop'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Novčanik je uspješno uvezen!',
			nav: {
				start: 'Početak',
				about: 'O NEM',
				settings: 'Settings'
			},
			main: {
				leftTitle: 'Novi  <em>NEM</em> korisnik?',
				leftButton: 'Stvori novi novčanik',
				walletNamePlh: 'Naziv Vašeg novčanika',
				passwordPlh: 'Lozinka',
				create: 'Stvori',
				rightTitle: 'Već si <em>NEM</em>ber?',
				rightButton: 'Otvori novčanik',
				openButton: 'Otvori',
				walletsFound: 'Pronađeni <strong>{{1}}</strong> <em>novčanici</em>',
				copyright: 'Fotografiju ustupio  <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC šifrira vaš novčanik',
					description: '<em>Sigurnost</em> je za NEM  jako važna za sprječavanje krađe NEM novčića &amp; udjela.'
				}, {
					title: 'NCC šifrira vaš novčanik',
					description: '<em>Sigurnost</em> je za NEM jako važna za sprječavanje krađe NEM novčića &amp; udjela.'
				}]
			},
			about: {
				sections: [{
					title: 'Kako radi NCC?',
					paragraphs: [
						'<strong>NCC</strong> pruža pristup Vašim udjelima i NEM novčićima kao što to čini tradicionalni novčanik. Možete',
						'<strong>NCC</strong> zahtijeva pristup na <strong>NIS</strong> poslužitelj kako bi mogao funkcionirati. Standardno je imati aktivan lokalni poslužitelj (instalira se zajedno sa <strong>NCC</strong>-om)',
						'Moguće je također podesiti pristup na udaljeni <strong>NIS</strong> poslužitelj.'
					],
					listItems: [
						'Koristiti više novčanika',
						'Definirati više računa koji će biti uključeni u novčanik'
					]
				}, {
					title: 'Što je to &#42;NIS?',
					paragraphs: [
						'Ova komponenta je odgovorna za održavanje <strong>NEM</strong> oblaka.',
						'Što je više <strong>NIS</strong> poslužitelja to je bolja sigurnost.',
						'<strong>NIS</strong> je pristupna točka <strong>NEM</strong> oblaku.'
					],
					legend: '<strong>&#42;NIS</strong> je oznaka za <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Otprilike prije {{1}} dan(a)',
			lastAccessJustNow: 'Upravo sad',
			lastAccessTooltip: 'Zadnji pristup na {{1}}',
			primary: 'primarni',
			primaryShort: 'P',
			noLabel: '<Nema oznake>',
			copiedToClipboard: 'Adresa je kopirana u međuspremnik!',
			actions: {
				refreshInfo: 'Osvježi informacije',
				bootLocalNode: 'Pokreni lokalni čvor',
				changeWalletName: 'Izmijeni naziv novčanika',
				changeWalletPassword: 'Izmijeni lozinku novčanika',
				mergeWallets: 'Spoji novčanike',
				exportWallet: 'Izvezi novčanike',
				createAccount: 'Stvori novi račun',
				createRealAccountData: 'Create real account data',
				verifyRealAccountData: 'Verify real account data',
				addAccount: 'Dodaj postojeći račun',
				changeAccountLabel: 'Izmijeni oznaku računa',
				setPrimary: 'Postavi kao primarni račun',
				removeAccount: 'Ukloni račun',
				clientInfo: 'Informacije klijenta',
				closeWallet: 'Zatvori novčanik',
				closeProgram: 'Zatvori  program',
				copyClipboard: 'Kopiraj adresu u međuspremnik'
			},
			nav: [
				'Kontrolna ploča',
				'Poruke',
				'Kontakti',
				'Transakcije',
				'Ubrani blokovi',
				'Razmjena udjela',
				'Novosti',
				'Aplikacije',
				'Računi',
				'Postavke',
				'Zatvori program'
			],
			bootNodeWarning: "Lokalni čvor mora biti pokrenut prije nego što u potpunosti  možete iskoristiti sva NCC svojstva."
		},
		dashboard: {
			assets: {
				title: 'Vaši udjeli'
			},
			importance: {
				title: 'Razina važnosti',
				unknown: 'Nepoznat status',
				start: 'Pokreni ubiranje',
				harvesting: 'Ubiranje',
				stop: 'Prekini ubiranje',
				description: 'Važnost računa u NEM oblaku',
				remoteHarvest: {
					activate: 'Activate remote harvesting',
					activating: 'Activating...',
					active: 'Remote harvesting is active',
					deactivate: 'Deactivate remote harvesting',
					deactivating: 'Deactivating...',
					startRemoteHarvesting: 'Start remote harvesting',
					remotelyHarvesting: 'Remotely harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			},
			transactions: {
				title: 'Nedavne transakcije',
				sendNem: 'Šalji NEM',
				balance: 'Trenutno stanje',
				syncStatus: '(na bloku {{1}}{{#2}} : otprilike {{3}} dan(a) u zaostatku {{/2}})',
				unknown: 'nepoznato',
				columns: [
					'',
					'Vrijeme',
					'Pošiljatelj/Primatelj',
					'Poruka',
					'',
					'Detalji',
					'Potvrde',
					'Naknada',
					'Iznos'
				],
				types: {
					pending: 'Transakcija u tijeku',
					outgoing: 'Odlazna transakcija',
					incoming: 'Dolazna transakcija',
					self: 'Vlastita transakcija',
				},
				noMessage: 'Nema poruke',
				encrypted: 'Poruka je šifrirana',
				view: 'Pregled',
				pending: 'U tijeku',
				seeAll: 'Pogledaj sve transakcije',
				noTransactions: 'Niti jedna transakcija nije još izvršena'
			},
			nemValue: {
				title: 'NEM statistika vrijednosti'
			},
			messages: {
				titleTooltip: 'Poruke'
			},
			news: {
				titleTooltip: 'Novosti'
			},
			notAvailable: 'Nije još dostupno u alfa izdanju'
		},
		transactions: {
			title: 'Transakcije',
			sendNem: 'Šalji NEM',
			balance: 'Trenutno stanje',
			filters: {
				confirmed: 'Potvrđene',
				unconfirmed: 'Nepotvrđene',
				incoming: 'Dolazne',
				outgoing: 'Odlazne',
			},
			table: {
				columns: [
					'',
					'Vrijeme',
					'Pošiljatelj/Primatelj',
					'poruke',
					'',
					'Detalji',
					'Potvrde',
					'Naknada',
					'Iznos'
				],
				types: {
					pending: 'Transakcija u tijeku',
					outgoing: 'Odlazna transakcija',
					incoming: 'Dolazna transakcija',
					self: 'Vlastita transakcija',
				},
				noMessage: 'Nema poruke',
				encrypted: 'Poruka je šifrirana',
				view: 'Pregled',
				pending: 'U tijeku',
				noTransactions: 'Još nema izvršenih transakcija',
				loading: 'Učitavanje više transakcija...'
			}
		},
		harvestedBlocks: {
			title: 'Ubrani blokovi',
			feeEarned: 'Zarađene naknade od zadnjih 25 ubranih blokova',
			table: {
				columns: [
					'Visina',
					'Vrijeme',
					'Šifra bloka',
					'Naknada'
				],
				noBlocks: 'Nema ubranih blokova',
				loading: 'Loading more harvested blocks'
			},
			harvesting: {
				unknown: 'Nepoznat status',
				start: 'Pokreni ubiranje',
				harvesting: 'Ubiranje',
				stop: 'Prekini ubiranje'
			}
		},
		settings: {
			title: 'Postavke',
			settings: [{
				name: 'Jezik'
			}],
			save: 'Spremi izmjene',
			saveSuccess: 'Postavke su uspješno spremljene'
		}
	}
});