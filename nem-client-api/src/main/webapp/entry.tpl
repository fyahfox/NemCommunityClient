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
						<label class="form-label">{{texts.modals.settings.language.label}}</label>
						<div class="form-dropdownbox">
							<div class="form-input form-input--textbox form-dropdownbox-selection {{#active['settingsModal-languageDropdown']}}form-dropdownbox-selection--selecting{{/}}" on-click="toggleOn('settingsModal-languageDropdown')">
								{{#languages}}
									{{# .id === settings.language}}
										{{.name}}
									{{/}}
								{{/}}
							</div>
							<ul class="form-dropdownbox-dropdown {{^active['settingsModal-languageDropdown']}}hidden{{/}}">
								{{#languages}}
									<li class="form-dropdownbox-item" on-click="set('settings.language', .id)">{{.name}}</li>
								{{/}}
							</ul>
						</div>
					</div>
				</div>
				<div class="settingsModal-main form">
					<div class="settingsModal-tabs bulletTabs">
						<button class="bulletTab-control {{#activeTab === 'remoteServer'}}active{{/}}" on-click="set('activeTab', 'remoteServer')">{{texts.modals.settings.remoteServer.tabTitle}}</button>
						<button class="bulletTab-control {{#activeTab === 'autoBoot'}}active{{/}}" on-click="set('activeTab', 'autoBoot')">{{texts.modals.settings.autoBoot.tabTitle}}</button>
					</div>
					<div class="settingsModal-panel settingsModal-panel--remoteServer {{^activeTab === 'remoteServer'}}hidden{{/}}">
						<div class="form-field">
							<p class="form-label">{{texts.modals.settings.remoteServer.protocol}}</p>
							<div class="form-dropdownbox">
								<div class="form-input form-input--textbox form-dropdownbox-selection {{#active['settingsModal-protocolDropdown']}}form-dropdownbox-selection--selecting{{/}}" on-click="toggleOn('settingsModal-protocolDropdown')">
									{{#settings.remoteServer.protocol === 'http'}}
										{{texts.modals.settings.remoteServer.protocolOptions.http}}
									{{/}}
								</div>
								<ul class="form-dropdownbox-dropdown {{^active['settingsModal-protocolDropdown']}}hidden{{/}}">
									<li class="form-dropdownbox-item" on-click="set('settings.remoteServer.protocol', 'http')">{{texts.modals.settings.remoteServer.protocolOptions.http}}</li>
								</ul>
							</div>
						</div>
						<div class="form-field">
							<p class="form-label">{{texts.modals.settings.remoteServer.host}}</p>
							<input type="text" class="form-input form-input--textbox" value="{{settings.remoteServer.host}}" />
						</div>
						<div class="form-field">
							<p class="form-label">{{texts.modals.settings.remoteServer.port}}</p>
							<input type="text" class="form-input form-input--textbox js-settingsModal-port-textbox" value="{{portStr}}" disabled />
						</div>
					</div>
					<div class="settingsModal-panel settingsModal-panel--autoBoot {{^activeTab === 'autoBoot'}}hidden{{/}}">
						<div class="form-field">
							<p class="form-label">{{texts.modals.settings.autoBoot.name}}</p>
							<input type="text" class="form-input form-input--textbox" value="{{settings.nisBootInfo.nodeName}}" />
						</div>
						<div class="form-field">
							<p class="form-label">{{texts.modals.settings.autoBoot.account}}</p>
							<div class="form-dropdownbox">
								<input class="form-input form-input--textbox form-dropdownbox-textbox {{#bootAccountDropdownActive}}form-dropdownbox-textbox--selecting{{/}} js-settingsModal-account-textbox" on-focus="set('bootAccountDropdownActive', true)" on-blur="set('bootAccountDropdownActive', false)" value="{{displayedAccount}}" />
								<ul class="form-dropdownbox-dropdown {{^bootAccountDropdownActive}}hidden{{/}}">
									<li class="form-dropdownbox-item" on-mousedown="set('settings.nisBootInfo.account', '')">{{texts.modals.settings.autoBoot.primaryAccount}}</li>
								</ul>
							</div>
						</div>
						<div class="form-field">
							<input type="checkbox" class="form-checkbox" id="settingModal-chkAutoBoot" checked="{{chkAutoBoot}}" />
							<label class="form-label form-checkbox-label" for="settingModal-chkAutoBoot">{{texts.modals.settings.autoBoot.auto}}</label>
						</div>
					</div>
					<div class="settingsModal-submit">
						<button type="button" class="modal-button moda-button--submit modal-button--primary" on-click="saveSettings()">{{texts.modals.settings.save}}</button>
					</div>
				</div>
			</settingsModal>

			<inputModal modalClass="inputModal">
				{{#message}}
					<p class="modal-message">
						{{message}}
					</p>
				{{/}}
				<div class="inputModal-form form">
					{{#fields}}
						<div class="form-field">
							<p class="form-label">{{.label.content}}</p>
							{{#.type === 'text' || .type === 'password'}}
								<input type="{{.type}}" class="form-input form-input--textbox {{#unimportant}}form-input--unimportant{{/}}" readonly="{{.readonly}}" value="{{values[.name]}}" on-keyup="inputKeyup" />
							{{/}}
							{{#.type === 'textarea'}}
								<textarea class="form-input {{#unimportant}}form-input--unimportant{{/}}" readonly="{{.readonly}}" value="{{values[.name]}}"></textarea>
							{{/}}
							{{#.sublabel}}
								<p class="form-sublabel {{#nullContent}}form-sublabel-nullContent{{/}}">
									{{.content}}
								</p>
							{{/}}
						</div>
					{{/}}
				</div>
				<div>
					<button type="button" class="modal-button modal-button--submit modal-button--primary" on-click="submit()" disabled="{{processing}}">
						{{#if processing}}
							{{processingLabel || submitLabel}}
						{{else}}
							{{submitLabel}}
						{{/if}}
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
					<div class="modal-head {{^modalTitle}}modal-head--empty{{/}}">
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