const changeTheme = theme => {
  changeStyleSheetUrl('layout-css', theme, 'layout');
  changeStyleSheetUrl('theme-css', theme, 'theme');
};

const changeStyleSheetUrl = (id, value, prefix) => {
  let element = document.getElementById(id);
  let urlTokens = element.getAttribute('href').split('/');
  urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
  let newURL = urlTokens.join('/');
  element.setAttribute('href', newURL);
};

export default (dispatch, toggleLayout) => {
  return [
    { label: 'Dashboard', icon: 'dashboard', to: '/' },
    { label: 'Customers', icon: 'list', to: '/customers' },
    {
      label: 'Themes',
      icon: 'palette',
      badge: '6',
      items: [
        {
          label: 'Indigo - Pink',
          icon: 'brush',
          command: () => {
            changeTheme('indigo');
          },
        },
        {
          label: 'Brown - Green',
          icon: 'brush',
          command: () => {
            changeTheme('brown');
          },
        },
        {
          label: 'Blue - Amber',
          icon: 'brush',
          command: () => {
            changeTheme('blue');
          },
        },
        {
          label: 'Blue Grey - Green',
          icon: 'brush',
          command: () => {
            changeTheme('blue-grey');
          },
        },
        {
          label: 'Dark - Blue',
          icon: 'brush',
          command: () => {
            changeTheme('dark-blue');
          },
        },
        {
          label: 'Dark - Green',
          icon: 'brush',
          command: () => {
            changeTheme('dark-green');
          },
        },
        {
          label: 'Green - Yellow',
          icon: 'brush',
          command: () => {
            changeTheme('green');
          },
        },
        {
          label: 'Purple - Cyan',
          icon: 'brush',
          command: () => {
            changeTheme('purple-cyan');
          },
        },
        {
          label: 'Purple - Amber',
          icon: 'brush',
          command: () => {
            changeTheme('purple-amber');
          },
        },
        {
          label: 'Teal - Lime',
          icon: 'brush',
          command: () => {
            changeTheme('teal');
          },
        },
        {
          label: 'Cyan - Amber',
          icon: 'brush',
          command: () => {
            changeTheme('cyan');
          },
        },
        {
          label: 'Grey - Deep Orange',
          icon: 'brush',
          command: () => {
            changeTheme('grey');
          },
        },
      ],
    },
    {
      label: 'Customization',
      icon: 'settings_application',
      items: [
        {
          label: 'Static Menu',
          icon: 'menu',
          command: () => {
            dispatch(toggleLayout({ layout: 'static' }));
          },
        },
        {
          label: 'Overlay Menu',
          icon: 'exit_to_app',
          command: () => {
            dispatch(toggleLayout({ layout: 'overlay' }));
          },
        },
        {
          label: 'Slim Menu',
          icon: 'more_vert',
          command: () => {
            dispatch(toggleLayout({ layout: 'slim' }));
          },
        },
        {
          label: 'Horizontal Menu',
          icon: 'border_horizontal',
          command: () => {
            dispatch(toggleLayout({ layout: 'horizontal' }));
          },
        },
        {
          label: 'Light Menu',
          icon: 'label_outline',
          command: () => {
            dispatch(toggleLayout({ darkMenu: false }));
          },
        },
        {
          label: 'Dark Menu',
          icon: 'label',
          command: () => {
            dispatch(toggleLayout({ darkMenu: true }));
          },
        },
        {
          label: 'Inline Profile',
          icon: 'contacts',
          command: () => {
            dispatch(toggleLayout({ profileMode: 'inline' }));
          },
        },
        {
          label: 'Top Profile',
          icon: 'person_pin',
          command: () => {
            dispatch(toggleLayout({ profileMode: 'top' }));
          },
        },
      ],
    },
    {
      label: 'Components',
      icon: 'list',
      badge: '2',
      badgeStyleClass: 'teal-badge',
      items: [
        { label: 'Sample Page', icon: 'desktop_mac', to: '/sample' },
        { label: 'Forms', icon: 'input', to: '/forms' },
        { label: 'Data', icon: 'grid_on', to: '/data' },
        { label: 'Panels', icon: 'content_paste', to: '/panels' },
        { label: 'Overlays', icon: 'content_copy', to: '/overlays' },
        { label: 'Menus', icon: 'menu', to: '/menus' },
        { label: 'Messages', icon: 'message', to: '/messages' },
        { label: 'Charts', icon: 'insert_chart', to: '/charts' },
        { label: 'Misc', icon: 'toys', to: '/misc' },
      ],
    },
    {
      label: 'Template Pages',
      icon: 'get_app',
      items: [
        { label: 'Empty Page', icon: 'hourglass_empty', to: '/empty' },
        { label: 'Landing Page', icon: 'flight_land', url: 'assets/pages/landing.html', target: '_blank' },
        { label: 'Login Page', icon: 'verified_user', to: '/login' },
        { label: 'Error Page', icon: 'error', to: '/error' },
        { label: '404 Page', icon: 'error_outline', to: '/not-found' },
        { label: 'Access Denied Page', icon: 'security', to: '/access' },
      ],
    },
    {
      label: 'Menu Hierarchy',
      icon: 'menu',
      items: [
        {
          label: 'Submenu 1',
          icon: 'subject',
          items: [
            {
              label: 'Submenu 1.1',
              icon: 'subject',
              items: [
                { label: 'Submenu 1.1.1', icon: 'subject' },
                { label: 'Submenu 1.1.2', icon: 'subject' },
                { label: 'Submenu 1.1.3', icon: 'subject' },
              ],
            },
            {
              label: 'Submenu 1.2',
              icon: 'subject',
              items: [
                { label: 'Submenu 1.2.1', icon: 'subject' },
                { label: 'Submenu 1.2.2', icon: 'subject' },
              ],
            },
          ],
        },
        {
          label: 'Submenu 2',
          icon: 'subject',
          items: [
            {
              label: 'Submenu 2.1',
              icon: 'subject',
              items: [
                { label: 'Submenu 2.1.1', icon: 'subject' },
                { label: 'Submenu 2.1.2', icon: 'subject' },
                { label: 'Submenu 2.1.3', icon: 'subject' },
              ],
            },
            {
              label: 'Submenu 2.2',
              icon: 'subject',
              items: [
                { label: 'Submenu 2.2.1', icon: 'subject' },
                { label: 'Submenu 2.2.2', icon: 'subject' },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Utils',
      icon: 'build',
      command: () => {
        window.location = '/utils';
      },
    },
    {
      label: 'Documentation',
      icon: 'find_in_page',
      command: () => {
        window.location = '/documentation';
      },
    },
    {
      label: 'Buy Now',
      icon: 'credit_card',
      command: () => {
        window.location = 'https://www.primefaces.org/store';
      },
    },
  ];
};
