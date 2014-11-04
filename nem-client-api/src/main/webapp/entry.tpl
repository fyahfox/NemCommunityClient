<!DOCTYPE html>
<!--[if IE]><html lang="en" class="ie"><![endif]-->
<!--[if !IE]><!--><html lang="en" class="non-ie"><!--<![endif]-->
	<head>
		<meta charset="utf-8" />
	    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	    <script>if(document.documentMode===10||document.documentMode===11)document.documentElement.className='ie'</script>
		<link rel="stylesheet" type="text/css" href="styles/css/all.css" />
		<title>NEM Community Client</title>
		<link rel="shortcut icon" href="images/Favicon.ico" />
	</head>
	<body>
		<script type="text/ractive" id="template">
			<div class="statusIndicator {{^appStatus}}hide{{/}} {{#appStatus.type === 'critical'}}statusIndicator--critical{{/}} {{#appStatus.type === 'warning'}}statusIndicator--warning{{/}} {{#appStatus.type === 'message'}}statusIndicator--message{{/}}">
				<span>{{appStatus.message}}</span>
			</div>
			{{#layout.0.name}}
				{{>0}}
			{{/}}

			<settingsModal modalClass="settingsModal" modalTitle="{{texts.modals.settings.title}}"  texts="{{texts}}" languages="{{languages}}" settings="{{settings}}">
				<div class="settingsModal-language">
					<div class="settingsModal-row">
						<label class="settingsModal-label">{{texts.modals.settings.language.label}}</label>
						<div class="dropdownbox">
							<div class="dropdownbox-selection settingsModal-input {{#active['settingsModal-languageDropdown']}}dropdownbox-selection--selecting{{/}}" on-click="toggleOn('settingsModal-languageDropdown')">
								{{#languages}}
									{{# .id === settings.language}}
										{{.name}}
									{{/}}
								{{/}}
							</div>
							<ul class="dropdownbox-dropdown {{^active['settingsModal-languageDropdown']}}hidden{{/}}">
								{{#languages}}
									<li class="dropdownbox-item" on-click="set('settings.language', .id)">{{.name}}</li>
								{{/}}
							</ul>
						</div>
					</div>
				</div>
				<div class="settingsModal-main">
					<div class="settingsModal-tabs bulletTabs">
						<button class="bulletTab-control {{#activeTab === 'remoteServer'}}active{{/}}" on-click="set('activeTab', 'remoteServer')">{{texts.modals.settings.remoteServer.tabTitle}}</button>
						<button class="bulletTab-control {{#activeTab === 'autoBoot'}}active{{/}}" on-click="set('activeTab', 'autoBoot')">{{texts.modals.settings.autoBoot.tabTitle}}</button>
					</div>
					<div class="settingsModal-panel settingsModal-panel--remoteServer {{^activeTab === 'remoteServer'}}hidden{{/}}">
						<div class="settingsModal-inputField">
							<p class="settingsModal-label">{{texts.modals.settings.remoteServer.protocol}}</p>
							<div class="dropdownbox">
								<div class="settingsModal-input dropdownbox-selection {{#active['settingsModal-protocolDropdown']}}dropdownbox-selection--selecting{{/}}" on-click="toggleOn('settingsModal-protocolDropdown')">
									{{#settings.remoteServer.protocol === 'http'}}
										{{texts.modals.settings.remoteServer.protocolOptions.http}}
									{{/}}
								</div>
								<ul class="dropdownbox-dropdown {{^active['settingsModal-protocolDropdown']}}hidden{{/}}">
									<li class="dropdownbox-item" on-click="set('settings.remoteServer.protocol', 'http')">{{texts.modals.settings.remoteServer.protocolOptions.http}}</li>
								</ul>
							</div>
						</div>
						<div class="settingsModal-inputField">
							<p class="settingsModal-label">{{texts.modals.settings.remoteServer.host}}</p>
							<input type="text" class="settingsModal-input" value="{{settings.remoteServer.host}}" />
						</div>
						<div class="settingsModal-inputField">
							<p class="settingsModal-label">{{texts.modals.settings.remoteServer.port}}</p>
							<input type="text" class="settingsModal-input js-settingsModal-port-textbox" value="{{portStr}}" disabled />
						</div>
					</div>
					<div class="settingsModal-panel settingsModal-panel--autoBoot {{^activeTab === 'autoBoot'}}hidden{{/}}">
						<div class="settingsModal-inputField">
							<p class="settingsModal-label">{{texts.modals.settings.autoBoot.name}}</p>
							<input type="text" class="settingsModal-input" value="{{settings.nisBootInfo.nodeName}}" />
						</div>
						<div class="settingsModal-inputField">
							<p class="settingsModal-label">{{texts.modals.settings.autoBoot.account}}</p>
							<div class="dropdownbox">
								<input class="settingsModal-input dropdownbox-textbox {{#bootAccountDropdownActive}}dropdownbox-textbox--selecting{{/}} js-settingsModal-account-textbox" on-focus="set('bootAccountDropdownActive', true)" on-blur="set('bootAccountDropdownActive', false)" value="{{displayedAccount}}" />
								<ul class="dropdownbox-dropdown {{^bootAccountDropdownActive}}hidden{{/}}">
									<li class="dropdownbox-item" on-mousedown="set('settings.nisBootInfo.account', '')">{{texts.modals.settings.autoBoot.primaryAccount}}</li>
								</ul>
							</div>
						</div>
						<div class="settingsModal-inputField">
							<input type="checkbox" id="settingModal-chkAutoBoot" checked="{{chkAutoBoot}}" />
							<label class="settingsModal-label" for="settingModal-chkAutoBoot">{{texts.modals.settings.autoBoot.auto}}</label>
						</div>
					</div>
					<div class="settingsModal-submit">
						<button type="button" class="modal-button moda-button--submit modal-button--primary" on-click="saveSettings()">{{texts.modals.settings.save}}</button>
					</div>
				</div>
			</settingsModal>

			<inputModal modalClass="inputModal" disableEasyClose="true">
				{{#message}}
					<p class="modal-message">
						{{message}}
					</p>
				{{/}}
				<div class="modal-form">
					{{#fields}}
						<div class="modal-form-field">
							<p class="modal-form-line">
								<label class="modal-form-label">
									{{.label.content}}
								</label>
							</p>
							{{#.type === 'text' || .type === 'password'}}
								<p class="modal-form-line">
									<input type="{{.type}}" class="modal-form-input {{#unimportant}}modal-form-input--unimportant{{/}}" readonly="{{.readonly}}" value="{{values[.name]}}" on-keyup="inputKeyup" />
								</p>
							{{/}}
							{{#.type === 'textarea'}}
								<p class="modal-form-line">
									<textarea class="modal-form-input {{#unimportant}}modal-form-input--unimportant{{/}}" readonly="{{.readonly}}" value="{{values[.name]}}"></textarea>
								</p>
							{{/}}
							{{#.sublabel}}
								<p class="modal-form-sublabel modal-form-line {{#nullContent}}modal-form-nullContent{{/}}">
									{{.content}}
								</p>
							{{/}}
						</div>
					{{/}}
				</div>
				<div>
					<button type="button" class="modal-button modal-button--submit modal-button--primary {{#processing}}disabled{{/}}" on-click="submit()">
						{{^processing}}
							{{submitLabel}}
						{{/}}
						{{#processing}}
							{{processingLabel || submitLabel}}
						{{/}}
					</button>
				</div>
			</inputModal>

			<confirmModal modalClass="confirmModal" disableEasyClose="true">
				<p><em>{{message}}</em></p>
				<div class="modal-actions">
					{{#actions}}
						<button type="button" class="modal-button {{#.actionType === 'primary'}}modal-button--primary{{/}} {{#.actionType === 'secondary'}}modal-button--secondary{{/}} {{#.actionType === 'neutral'}}modal-button--neutral{{/}}" on-click="confirm(.action)">{{.label}}</button>
					{{/}}
				</div>
			</confirmModal>

			<messageModal modalClass="messageModal" closeOnEnter="true">
				<p><em>{{{message}}}</em></p>
				<div class="modal-actions">
					<button type="button" class="modal-button modal-button--neutral" on-click="closeModal()">OK</button>
				</div>
			</messageModal>

			<errorModal modalClass="errorModal" texts="{{texts}}" fill="{{fill}}">
				<div>
					<img src="images/sad-face.png" alt="Sadly"/>
				</div>
				<h1 class="errorModal-title">{{texts.modals.error.title}}</h1>
				<p class="errorModal-caption"><em>{{fill(texts.modals.error.caption, errorId)}}</em></p>
				<p class="errorModal-message">{{message}}</p>
			</errorModal>
		</script>

		<script type="text/ractive" id="modal-template">
			<div tabindex="-1" class="modal-container {{#isActive}}modal--active{{/}}" on-click="{{^disableEasyClose}}modalContainerClick{{/}}" on-keyup="{{^disableEasyClose}}modalContainerKeyup{{/}}">
				<article class="modal {{modalClass}}">
					<div class="modal-head">
						<h1 class="modal-title">{{modalTitle}}</h1>
					</div>
					<div class="modal-body">
						{{>content}}
					</div>
					{{^noCloseButton}}
						<button type="button" class="modal-closeBtn icon-close-plain" on-click="closeModal()"></button>
					{{/}}
				</article>
			</div>
		</script>

		<script>window.entryPage='<%= entryPage %>'</script>
		<script data-main="scripts/index" src="scripts/require.js"></script>
	</body>
</html>