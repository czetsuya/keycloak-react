import React, { Component } from 'react';
import './Documentation.css';
import { withSecurity } from '../routing/SecureRoutes';
import { withSecureLayout } from '../layout/SecureLayout';

class Documentation extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="ui-g">
				<div className="ui-g-12">
					<div className="card docs">
						<h1>Current Version</h1>
						<p>React 16.7.0 and PrimeReact 3.0.0</p>
						<h1>Getting Started</h1>
						<p>
							Ultima is an application template for React based on the popular{' '}
							<a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> that
							allows creating React apps with no configuration. To get started extract the contents of the
							zip bundle and install the dependencies with npm or yarn.
						</p>
						<pre>
							{`npm install
`}
						</pre>
						or
						<pre>
							{`yarn
`}
						</pre>
						<p>
							Next step is running the application using the start script and navigate to{' '}
							<b>http://localhost:3000/</b> to view the application. That is it, you may now start with
							the development of your application using the Ultima template.
						</p>
						<pre>
							{`npm start
`}
						</pre>
						or
						<pre>
							{`yarn start
`}
						</pre>
						<h1>React Scripts</h1>
						<p>Following commands are derived from create-app-app.</p>
						<pre>
							{`"npm start" or "yarn start": Starts the development server
"npm test" or "yarn test": Runs the tests.
"npm run build" or "yarn run build": Creates a production build.
`}
						</pre>
						<h1>Dependencies</h1>
						<p>
							Only required dependencies are PrimeReact and PrimeFlex where optional dependencies exist to
							enable certain components in PrimeReact such as Google Maps.
						</p>
						<pre>
							{`
"primereact": "^2.0.0-beta.6",       //required: PrimeReact components
"primeflex": "^1.0.0-rc.1",          //required: Layout
"react-router-dom": "^4.2.2"         //optional: Router
`}
						</pre>
						<h1>Structure</h1>
						<p>
							Ultima consists of 3 main parts; the application layout, layout resources and theme
							resources for PrimeReact components. <b>App.js</b> inside src folder is the main component
							containing the template for the base layout whereas required resources for the layout are
							placed inside the <b>public/assets/layout</b> folder and similarly theme resources are
							inside <b>public/assets/theme</b> folder.
						</p>
						<h1>Template</h1>
						<p>
							Main layout is the JSX of the App.js, it is divided into a couple of child components such
							as topbar, profile, menu and footer. Here is render method of the App.js component that
							implements the logic such as menu state, layout modes and so on.
						</p>
						<pre>
							{`
render() {
    const layoutContainerClassName = classNames('layout-container', {
        'menu-layout-static': this.state.layoutMode !== 'overlay',
        'menu-layout-overlay': this.state.layoutMode === 'overlay',
        'layout-menu-overlay-active': this.state.overlayMenuActive,
        'menu-layout-slim': this.state.layoutMode === 'slim',
        'menu-layout-horizontal': this.state.layoutMode === 'horizontal',
        'layout-menu-static-inactive': this.state.staticMenuDesktopInactive,
        'layout-menu-static-active': this.state.staticMenuMobileActive
    });
    const menuClassName = classNames('layout-menu', {'layout-menu-dark': this.state.darkMenu});
    const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

    return (
        <div className="layout-wrapper" onClick={this.onDocumentClick}>
            <div ref={(el) => this.layoutContainer = el} className={layoutContainerClassName}>

                <AppTopbar profileMode={this.state.profileMode} horizontal={this.props.horizontal}
                        topbarMenuActive={this.state.topbarMenuActive} activeTopbarItem={this.state.activeTopbarItem}
                        onMenuButtonClick={this.onMenuButtonClick} onTopbarMenuButtonClick={this.onTopbarMenuButtonClick}
                        onTopbarItemClick={this.onTopbarItemClick} onRightPanelButtonClick={this.onRightPanelButtonClick} />

                <div className={menuClassName} onClick={this.onMenuClick}>
                    <ScrollPanel ref={(el) => this.layoutMenuScroller = el} style={{height: '100%'}}>
                        <div className="menu-scroll-content">
                            {(this.state.profileMode === 'inline' && this.state.layoutMode !== 'horizontal') && <AppInlineProfile />}
                            <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} onRootMenuItemClick={this.onRootMenuItemClick}
                                    layoutMode={this.state.layoutMode} active={this.state.menuActive} />
                        </div>
                    </ScrollPanel>
                </div>

                <div className="layout-main">

                    <AppBreadCrumbWithRouter />

                    <div className="layout-content">

                        <Route path="/" exact component={Dashboard} />
                        <Route path="/forms" component={FormsDemo} />
                        <Route path="/sample" component={SampleDemo} />
                        <Route path="/data" component={DataDemo} />
                        <Route path="/panels" component={PanelsDemo} />
                        <Route path="/overlays" component={OverlaysDemo} />
                        <Route path="/menus" component={MenusDemo} />
                        <Route path="/messages" component={MessagesDemo} />
                        <Route path="/charts" component={ChartsDemo} />
                        <Route path="/misc" component={MiscDemo} />
                        <Route path="/empty" component={EmptyPage} />
                        <Route path="/utils" component={UtilsDemo} />
                        <Route path="/documentation" component={Documentation} />

                        <AppFooter />
                    </div>
                </div>

                <AppRightPanel expanded={this.state.rightPanelActive} onContentClick={this.onRightPanelClick} />

                <div className="layout-mask"></div>
            </div>
        </div>
    );
}

`}
						</pre>
						<h1>Menu</h1>
						<p>
							Menu is a separate component defined in AppMenu.js file based on PrimeReact MenuModel API.
							In order to define the menuitems, navigate to createMenu() method App.js file and define
							your own model as a nested structure. Here is the menu component from the demo application.
							Notice that menu object is bound to the model property of AppMenu component as shown above.
						</p>
						<pre>
							{`
createMenu() {
    this.menu = [
        {label: 'Dashboard', icon: 'dashboard', command:()=>{ window.location.hash="/"}},
        {
            label: 'Themes', icon: 'palette', badge: '6',
            items: [
                {label: 'Indigo - Pink', icon: 'brush', command: (event) => {this.changeTheme('indigo')}},
                {label: 'Brown - Green', icon: 'brush', command: (event) => {this.changeTheme('brown')}},
                {label: 'Blue - Amber', icon: 'brush', command: (event) => {this.changeTheme('blue')}},
                {label: 'Blue Grey - Green', icon: 'brush', command: (event) => {this.changeTheme('blue-grey')}},
                {label: 'Dark - Blue', icon: 'brush', command: (event) => {this.changeTheme('dark-blue')}},
                {label: 'Dark - Green', icon: 'brush', command: (event) => {this.changeTheme('dark-green')}},
                {label: 'Green - Yellow', icon: 'brush', command: (event) => {this.changeTheme('green')}},
                {label: 'Purple - Cyan', icon: 'brush', command: (event) => {this.changeTheme('purple-cyan')}},
                {label: 'Purple - Amber', icon: 'brush', command: (event) => {this.changeTheme('purple-amber')}},
                {label: 'Teal - Lime', icon: 'brush', command: (event) => {this.changeTheme('teal')}},
                {label: 'Cyan - Amber', icon: 'brush', command: (event) => {this.changeTheme('cyan')}},
                {label: 'Grey - Deep Orange', icon: 'brush', command: (event) => {this.changeTheme('grey')}}
            ]
        },
        {
            label: 'Customization', icon: 'settings_application',
            items: [
                {label: 'Static Menu', icon: 'menu',  command: () => this.setState({layoutMode: 'static'} )},
                {label: 'Overlay Menu', icon: 'exit_to_app',  command: () => this.setState({layoutMode: 'overlay'}) },
                {label: 'Slim Menu', icon: 'more_vert',  command: () => this.setState({layoutMode: 'slim'}) },
                {label: 'Horizontal Menu', icon: 'border_horizontal',  command: () => this.setState({layoutMode: 'horizontal'}) },
                {label: 'Light Menu', icon: 'label_outline',  command: () => this.setState({darkMenu: false}) },
                {label: 'Dark Menu', icon: 'label',  command: () => this.setState({darkMenu: true}) },
                {label: 'Inline Profile', icon: 'contacts',  command: () => this.setState({profileMode: 'inline'}) },
                {label: 'Top Profile', icon: 'person_pin',  command: () => this.setState({profileMode: 'top'}) },
            ]
        },
        {
            label: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'teal-badge',
            items: [
                {label: 'Sample Page', icon: 'desktop_mac', command:()=>{ window.location.hash="/sample"; }},
                {label: 'Forms', icon: 'input', command:()=>{ window.location.hash="/forms"; }},
                {label: 'Data', icon: 'grid_on', command:()=>{ window.location.hash="/data"; }},
                {label: 'Panels', icon: 'content_paste', command:()=>{ window.location.hash="/panels"; }},
                {label: 'Overlays', icon: 'content_copy', command:()=>{ window.location.hash="/overlays"; }},
                {label: 'Menus', icon: 'menu', command:()=>{ window.location.hash="/menus"; }},
                {label: 'Messages', icon: 'message', command:()=>{ window.location.hash="/messages"; }},
                {label: 'Charts', icon: 'insert_chart', command:()=>{ window.location.hash="/charts"; }},
                {label: 'Misc', icon: 'toys', command:()=>{ window.location.hash="/misc"; }}
            ]
        },
        {
            label: 'Template Pages', icon: 'get_app',
            items: [
                {label: 'Empty Page', icon: 'hourglass_empty', command:()=>{ window.location.hash="/empty"; }},
                {label: 'Landing Page', icon: 'flight_land', url: 'assets/pages/landing.html', target: '_blank'},
                {label: 'Login Page', icon: 'verified_user', url: 'assets/pages/login.html', target: '_blank'},
                {label: 'Error Page', icon: 'error', url: 'assets/pages/error.html', target: '_blank'},
                {label: '404 Page', icon: 'error_outline', url: 'assets/pages/404.html', target: '_blank'},
                {label: 'Access Denied Page', icon: 'security', url: 'assets/pages/access.html', target: '_blank'}
            ]
        },
        {
            label: 'Menu Hierarchy', icon: 'menu',
            items: [
                {
                    label: 'Submenu 1', icon: 'subject',
                    items: [
                        {
                            label: 'Submenu 1.1', icon: 'subject',
                            items: [
                                {label: 'Submenu 1.1.1', icon: 'subject'},
                                {label: 'Submenu 1.1.2', icon: 'subject'},
                                {label: 'Submenu 1.1.3', icon: 'subject'},
                            ]
                        },
                        {
                            label: 'Submenu 1.2', icon: 'subject',
                            items: [
                                {label: 'Submenu 1.2.1', icon: 'subject'},
                                {label: 'Submenu 1.2.2', icon: 'subject'}
                            ]
                        },
                    ]
                },
                {
                    label: 'Submenu 2', icon: 'subject',
                    items: [
                        {
                            label: 'Submenu 2.1', icon: 'subject',
                            items: [
                                {label: 'Submenu 2.1.1', icon: 'subject'},
                                {label: 'Submenu 2.1.2', icon: 'subject'},
                                {label: 'Submenu 2.1.3', icon: 'subject'},
                            ]
                        },
                        {
                            label: 'Submenu 2.2', icon: 'subject',
                            items: [
                                {label: 'Submenu 2.2.1', icon: 'subject'},
                                {label: 'Submenu 2.2.2', icon: 'subject'}
                            ]
                        },
                    ]
                }
            ]
        },
        {label: 'Utils', icon: 'build',  command:()=>{ window.location.hash="/utils"; }},
        {label: 'Documentation', icon: 'find_in_page',  command:()=>{ window.location.hash="/documentation"; }}
    ];
}

`}
						</pre>
						<h1>Theme and Layout SASS</h1>
						<p>
							Ultima provides 12 PrimeReact themes out of the box, setup of a theme simple including the
							css of theme to your page that are located inside resources/theme folder.
						</p>
						<ul>
							<li>theme-blue-grey</li>
							<li>theme-blue</li>
							<li>theme-brown</li>
							<li>theme-cyan</li>
							<li>theme-dark-blue</li>
							<li>theme-dark-green</li>
							<li>theme-green</li>
							<li>theme-grey</li>
							<li>theme-indigo</li>
							<li>theme-purple-amber</li>
							<li>theme-purple-cyan</li>
							<li>theme-teal</li>
						</ul>
						<p>A custom theme can be developed by the following steps.</p>
						<ul>
							<li>Choose a custom theme name such as theme-myown.</li>
							<li>
								Create a file named theme-myown.scss under <i>public/assets/theme folder</i>.
							</li>
							<li>
								Define the variables listed below and import the <i>../sass/theme/_theme.scss</i> file.
							</li>
							<li>Build the scss to generate css</li>
							<li>Include the generated theme.css to your application.</li>
						</ul>
						<p>Here are the variables required to create a theme.</p>
						<pre>
							{`
$primaryColor: #607D8B;
$primaryDarkColor: #37474F;
$primaryLightColor: #B0BEC5;
$accentColor: #8BC34A;
$accentDarkColor: #558B2F;
$accentLightColor: #C5E1A5;
$accentTextColor: #ffffff;

@import '../sass/theme/_theme';

`}
						</pre>
						<p> An example sass command to compile the css would be;</p>
						<pre>sass public/assets/theme/theme-myown.scss public/assets/theme/theme-myown.css</pre>
						<p>
							Watch mode is handy to avoid compiling everytime when a change is made, instead use the
							following command so that sass generates the file whenever you make a customization. This
							builds all css files whenever a change is made to any scss file.
						</p>
						<pre>sass -w public/assets/ --sourcemap=none</pre>
						<p>Same can also be applied to layout itself;</p>
						<ul>
							<li>Choose a layout name such as layout-myown.</li>
							<li>
								Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.
							</li>
							<li>
								Define the variables listed below and import the <i>../sass/layout/_layout.scss</i>{' '}
								file.
							</li>
							<li>Build the scss to generate css</li>
							<li>Serve the css by importing it using a link tag or a bundler.</li>
						</ul>
						<p>
							Here are the variables required to create a layout, you may need to change the last line
							according to the relative path of the sass folder in your application.
						</p>
						<pre>
							{`$primaryColor: #607D8B;
$primaryDarkColor: #37474F;
$primaryLightColor: #B0BEC5;
$accentColor: #8BC34A;
$accentDarkColor: #558B2F;
$accentLightColor: #C5E1A5;
$accentTextColor: #ffffff;
$darkMenuBgColor: #424242;
$darkMenuHoverColor: #676767;
$darkMenuRouterLinkActiveColor: #8BC34A;
$lightMenuRouterLinkActiveColor: #8BC34A;
$horizontalLightMenuRouterLinkActiveColor: #8BC34A;

@import '../../sass/layout/_layout';
`}
						</pre>
						<p>
							In case you would like to customize the shared variables, the _variables.scss files are
							where the options are defined for layout and theme.
						</p>
						<h3>sass/_variables.scss</h3>
						<pre>
							{`/* Common */
$textColor: #212121;
$textSecondaryColor: #757575;
$fontFamily: "Roboto","Helvetica Neue",sans-serif;
$fontSize: 14px;
$lineHeight: 18px;
$transitionDuration: .3s;
$borderRadius: 3px;
$iconFontSize:1.5em;
$iconWidth:1em;
$iconHeight:1em;
$overlayMaskBgColor:#424242;
$errorColor:#e62a10;
$errorTextColor:#ffffff;
$hoverBgColor:#e8e8e8;
$hoverTextColor:#000000;
$dividerColor:#dbdbdb;
$dividerLightColor:#cacaca;
$inlineSpacing:.5em;

$blueGrey:#607D8B;
$cyan:#00BCD4;
$teal:#009688;
$red:#F44336;
$green:#4CAF50;
$deepOrange:#FF5722;
$purple:#673AB7;
$pink:#E91E63;
$amber:#FFC107;
$orange:#FF9800;
$brown:#795548;
$indigo:#3F51B5;
$blue:#03A9F4;
$secondary:#ffffff;

$blueGreyDark:#37474F;
$cyanDark:#00838F;
$tealDark:#009688;
$redDark:#C62828;
$greenDark:#2E7D32;
$deepOrangeDark:#D84315;
$purpleDark:#4527A0;
$pinkDark:#AD1457;
$amberDark:#FF8F00;
$orangeDark:#EF6C00;
$brownDark:#4E342E;
$indigoDark:#283593;
$blueDark:#0277BD;
`}
						</pre>
						<h3>sass/layout/_variables</h3>
						<pre>
							{`
@import '../_variables';

$bodyBgColor:#f7f7f7;
$maskBgColor:#424242;
$topbarButtonColor:#ffffff;
$topbarButtonHoverColor:#e8e8e8;
$topbarSearchBorderColor:#ffffff;
$topbarSearchColor:#ffffff;
$layoutMenuBgColor:#ffffff;
$layoutMenuScrollbarBgColor:#aaaaaa;
$layoutMenuItemIconColor:#757575;
$layoutMenuItemActiveColor:#e8e8e8;
$rightPanelBgColor:#ffffff;
$topbarSubmenuBgColor:#ffffff;
$profileMenuBorderBottomColor:#d6d5d5;
$profileMenuDarkBorderBottomColor:#545454;
$darkMenuColor:#ffffff;
$slimMenuTooltipColor:#ffffff;
$activeMenuItemBadgeColor:#ffffff;
$activeMenuItemBadgeTextColor:#212121;
`}
						</pre>
						<h3>sass/theme/_variables</h3>
						<pre>
							{`@import '../_variables';

$headerFontSize:1em;
$headerPadding:.625em 1em;
$headerBgColor:$primaryColor;
$headerTextColor:#ffffff;
$headerIconColor:#ffffff;

$contentPadding:.625em 1em;
$contentBgColor:#ffffff;
$contentBorderColor:#d8d8d8;
$contentLineHeight: 18px;

// InputText
$inputBorderColor:#bdbdbd;
$inputPadding:2px 2px 1px 2px;
$inputHeaderPadding:.625em 1em;
$inputGroupAddonBgColor:#e6e6e6;
$textboxBgColor:#f7f7f7;
$inputBgColor:#ffffff;
$inputFieldLabelTextColor:#999999;
$inputFieldBoxBgColor:#f7f7f7;
$inputFieldFillBgColor:#f7f7f7;
$inputAutoFillBorderColor: #bdbdbd;

// Input lists
$listItemPadding:.625em 1em;
$inputListItemFilterTextColor:#ffffff;

//input switch
$inputSwitchOffHandleBgColor:#ffffff;

// Button
$buttonFontSize:1em;
$buttonTextColor:#ffffff;

//radiobutton
$radioButtonBorderColor:#757575;

//checkbox
$checkboxBorderColor:#757575;

//editor
$editorHeaderBgColor:#e8e8e8;
$editorExpandLabelColor:#444444;

//datatable
$dataTableBorderColor:#cacaca;
$dataTableFilterInputBgColor:#ffffff;
$dataTableEditableCellInputBorderColor:#ffffff;
$dataTableEditableCellInputColor:#ffffff;
$dataTableRowBgColorEven:#f4f4f4;
$dataTableEvenRowBgColor:#f4f4f4;

//dataview
$dataviewHeaderBgColor:#ffffff;

//steps
$stepsNumberBgColor:#757575;
$stepsNumberColor:#ffffff;

//messages, growl, toast
$messageIconColor:#ffffff;
$infoMessageBgColor:#2196F3;
$infoMessageBorderColor:#2196F3;
$infoMessageTextColor:#ffffff;

$warnMessageBgColor:#ffc107;
$warnMessageBorderColor:#ffc107;
$warnMessageTextColor:#ffffff;

$errorMessageBgColor:#e62a10;
$errorMessageBorderColor:#e62a10;
$errorMessageTextColor:#ffffff;

$successMessageBgColor:#8BC34A;
$successMessageBorderColor:#8BC34A;
$successMessageTextColor:#ffffff;

//tooltip
$tooltipBgColor:#323232;

//dialog
$dialogHeaderBgColor:#ffffff;
$dialogHeaderTextColor:$textColor;
$dialogFooterButtonBgColor:#ffffff;
$dialogFooterButtonTextColor:$textColor;
`}
						</pre>
						<p>
							In the demo app layout and theme css files are defined using link tags in index.html so the
							demo can switch them on the fly by changing the path however if this is not a requirement,
							you may also import them in App.js so that webpack adds them to the bundle.
						</p>
						<h1>Menu Item Badges</h1>
						<p>
							Badges are numerical indicators associated with a link. The badge property is the value of
							the badge and badgeStyleClass is style class of the badge.
						</p>
						<pre>label: 'Components', icon: 'list', badge: '2', badgeClassName: 'red-badge'</pre>
						<p>
							Default badge uses the accent color of ultima layout and there are three more alternative
							colors.
						</p>
						<ul>
							<li>red-badge</li>
							<li>purple-badge</li>
							<li>teal-badge</li>
						</ul>
						<h1>Menu Modes</h1>
						<p>
							Menu has 4 modes, static, overlay, slim and horizontal. Main layout container element in
							App.js is used to define which mode to use by adding specific classes. List below indicates
							the style classes for each mode.
						</p>
						<ul>
							<li>Static: "layout-wrapper menu-layout-static"</li>
							<li>Overlay: "layout-wrapper menu-layout-overlay"</li>
							<li>Slim: "layout-wrapper menu-layout-static menu-layout-slim"</li>
							<li>Horizontal: "layout-wrapper menu-layout-static menu-layout-horizontal"</li>
						</ul>
						<p>For example to create a horizontal menu, the div element should be in following form;</p>
						<pre>&lt;div className="layout-wrapper menu-layout-static menu-layout-horizontal"&gt;</pre>
						<p>
							It is also possible to leave the choice to the user by keeping the preference at a component
							and using an expression to bind it so that user can switch between modes. Sample application
							has an example implementation of such use case. Refer to App.js for an example.
						</p>
						<h1>Dark Menu</h1>
						<p>
							Default color scheme of menu is light and alternative dark mode can be activated by adding{' '}
							<i>layout-menu-dark</i> style class to the menu container.
						</p>
						<pre>&lt;div className="layout-menu layout-menu-dark"&gt;</pre>
						<h1>Profile Modes</h1>
						<p>
							There are two possible locations for the user profile menu, first option is inline located
							inside the main menu and second option is the topbar menu. For inline mode, profile content
							should be placed above the menu and for inline mode content goes in topbar-items list. The
							sample demo application provides examples for both cases.
						</p>
						<h1>Utilites</h1>
						<p>
							Ultima provides various helper features such as material iconset compatible with PrimeNG
							components and helper classes. Visit utils page for details.
						</p>
						<h1>PrimeFlex Grid System</h1>
						<p>
							Ultima uses PrimeFlex Grid System throughout the samples, although any Grid library can be
							used we suggest using PrimeFlex as your grid system as it is well tested and supported by
							PrimeReact. PrimeFlex is available at npm and defined at package.json of Ultima so that it
							gets installed by default.
						</p>
						<h1>Customizing Styles</h1>
						<p>
							It is suggested to write your customizations in <i>_layout_styles.scss</i> and{' '}
							<i>_theme_styles.scss </i> files for seamless updates as these files are empty by default
							and never updated.
						</p>
						<h1>Migration Guide</h1>
						<p>2.0.0-beta.3 to 3.0.0</p>
						<ul>
							<li>Update index.jx</li>
							<li>Update App.js</li>
							<li>Update AppBreadcrumb.js</li>
							<li>Update AppInlineProfile.js</li>
							<li>Update AppMenu.js</li>
							<li>Update AppTopbar.js</li>
							<li>Add AppWrapper.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>
						<p>2.0.0-beta.2 to 2.0.0-beta.3</p>
						<ul>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>
						<p>2.0.0-beta.1 to 2.0.0-beta.2</p>
						<ul>
							<li>Update theme css files</li>
						</ul>
						<p>1.x to 2.0.0-beta.1</p>
						<p>Brings support to PrimeReact 2.x</p>
						<ul>
							<li>Install PrimeFlex from npm.</li>
							<li>Update src/ripple.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
							<li>Include the new AppBreadcrumb.js component and update App.js.</li>
						</ul>
						<p>1.6.0 to 1.6.1</p>
						<p>Brings support for PrimeReact 1.6.x.</p>
						<ul>
							<li>Import primeicons.css in App.js.</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>
						<p>1.5.3 to 1.6.0</p>
						<ul>
							<li>Update AppMenu.js</li>
							<li>Update AppRightPanel.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>
						<p>1.5.2 to 1.5.3</p>
						<ul>
							<li>Update App.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>
						<p>1.5.1 to 1.5.2</p>
						<ul>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>
						<p>1.5.0 to 1.5.1</p>
						<p>Aligns input focus animation with the Material specs.</p>
						<ul>
							<li>Update AppTopbar.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>
						<p>1.4.2 to 1.5.0</p>
						<ul>
							<li>Update App.js</li>
							<li>Update AppRightPanel.js</li>
							<li>Update layout css files</li>
							<li>Update theme css files</li>
						</ul>
						<p>1.4.1 to 1.4.2</p>
						<ul>
							<li>Update theme css files</li>
						</ul>
						<p>1.4.0 to 1.4.1</p>
						<ul>
							<li>Update theme css files</li>
						</ul>
						<p>1.0.0 to 1.4.0</p>
						<ul>
							<li>Update PrimeReact to 1.4.0</li>
							<li>Update css files of theme and layout</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default withSecurity(withSecureLayout(Documentation));
