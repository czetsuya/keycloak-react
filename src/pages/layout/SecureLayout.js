import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { isValidElementType } from 'react-is';
import AppBreadcrumb from './AppBreadcrumb';
import AppRightPanel from './AppRightPanel';
import AppTopbar from './AppTopbar';
import AppMenu from './AppMenu';
import { AppInlineProfile } from './AppInlineProfile';
import { AppFooter } from './AppFooter';
import ScrollPanel from './ScrollPanel';
import * as MenuActions from '../../framework/redux/modules/Menu';
import 'fullcalendar/dist/fullcalendar.css';
import '../../ripple.js';
import '../../App.css';

const SecureLayout = ({ SecureComponent, menuState, ...componentProps }) => {
  const { dispatch } = componentProps;
  const { toggle, clicked } = menuState;

  const isDesktop = () => {
    return window.innerWidth > 1024;
  };

  const isHorizontal = () => {
    return toggle.layout === 'horizontal';
  };

  const isSlim = () => {
    return toggle.layout === 'slim';
  };

  useEffect(() => {
    dispatch(MenuActions.getMenuContent());
  }, [dispatch]);

  useEffect(() => {
    if (!clicked.topbarItem) {
      dispatch(MenuActions.toggle({ activeTopbarItem: null, topbarMenuActive: false }));
    }

    if (!clicked.menu) {
      if (isHorizontal() || isSlim()) {
        dispatch(MenuActions.toggle({ menuActive: false }));
      }
    }

    if (!clicked.rightPanel) {
      dispatch(MenuActions.toggle({ rightPanelActive: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, clicked]);

  const onMenuClick = () => {
    dispatch(MenuActions.toggleClicked({ menu: true }));
  };

  const onMenuButtonClick = () => {
    dispatch(MenuActions.toggleClicked({ menu: true }));
    dispatch(MenuActions.toggle({
      rotateMenuButton: !toggle.rotateMenuButton,
      topbarMenuActive: false,
    }));

    if (toggle.layout === 'overlay') {
      dispatch(MenuActions.toggle({ overlayMenuActive: !toggle.overlayMenuActive }));
    } else {
      if (isDesktop()) {
        dispatch(MenuActions.toggle({ staticMenuDesktopInactive: !toggle.staticMenuDesktopInactive }));
      } else {
        dispatch(MenuActions.toggle({ staticMenuMobileActive: !toggle.staticMenuMobileActive }));
      }
    }
  };

  const onTopbarMenuButtonClick = () => {
    dispatch(MenuActions.toggleClicked({ topbarItem: true }));
    dispatch(MenuActions.toggle({ topbarMenuActive: !toggle.topbarMenuActive }));
  };

  const onTopbarItemClick = event => {
    dispatch(MenuActions.toggleClicked({ topbarItem: true }));
    if (toggle.activeTopbarItem === event.item) {
      dispatch(MenuActions.toggle({ activeTopbarItem: null }));
    } else {
      dispatch(MenuActions.toggle({ activeTopbarItem: event.item }));
    }
  };

  const onMenuItemClick = event => {
    if (!event.item.items) {
      hideOverlayMenu();
    }

    if (!event.item.items && (isHorizontal() || isSlim())) {
      dispatch(MenuActions.toggle({ menuActive: false }));
    }
  };

  const onRootMenuItemClick = () => {
    dispatch(MenuActions.toggle({ menuActive: !toggle.menuActive }));
  };

  const onRightPanelButtonClick = event => {
    dispatch(MenuActions.toggleClicked({ rightPanel: true }));
    dispatch(MenuActions.toggle({ rightPanelActive: !toggle.rightPanelActive }));
    event.preventDefault();
  };

  const onRightPanelClick = () => {
    dispatch(MenuActions.toggleClicked({ rightPanel: true }));
  };

  const hideOverlay = clickedComponent => (clickTarget) => {
    if (clicked[clickedComponent]) {
      if (clickedComponent === 'menu' && clickTarget === 'menuToggle') {
        return;
      }
      dispatch(MenuActions.toggleClicked({ [clickedComponent]: false }));
      if (toggle.layout === 'overlay') {
        hideOverlayMenu();
      }
    }
  };

  const hideOverlayMenu = () => {
    dispatch(MenuActions.toggle({
      rotateMenuButton: false,
      overlayMenuActive: false,
      staticMenuMobileActive: false,
    }));
  };

  const layoutContainerClassName = classNames('layout-container', {
    'menu-layout-static': toggle.layout !== 'overlay',
    'menu-layout-overlay': toggle.layout === 'overlay',
    'layout-menu-overlay-active': toggle.overlayMenuActive,
    'menu-layout-slim': toggle.layout === 'slim',
    'menu-layout-horizontal': toggle.layout === 'horizontal',
    'layout-menu-static-inactive': toggle.staticMenuDesktopInactive,
    'layout-menu-static-active': toggle.staticMenuMobileActive,
  });

  const menuClassName = classNames('layout-menu', { 'layout-menu-dark': toggle.darkMenu });

  return (
    <div className="layout-wrapper">
      {toggle &&
      <div className={layoutContainerClassName}>
        <AppTopbar
          profileMode={toggle.profile}
          horizontal={isHorizontal()}
          topbarMenuActive={toggle.topbarMenuActive}
          activeTopbarItem={toggle.activeTopbarItem}
          onMenuButtonClick={onMenuButtonClick}
          onTopbarMenuButtonClick={onTopbarMenuButtonClick}
          onTopbarItemClick={onTopbarItemClick}
          onRightPanelButtonClick={onRightPanelButtonClick}
          onClickAway={hideOverlay('topbarItem')}
        />
        <div className={menuClassName} onClick={onMenuClick}>
          <ScrollPanel>
            <div className="menu-scroll-content">
              {toggle.profileMode === 'inline' && toggle.layout !== 'horizontal' && <AppInlineProfile />}
              <AppMenu
                model={menuState.menu}
                onMenuItemClick={onMenuItemClick}
                onRootMenuItemClick={onRootMenuItemClick}
                layoutMode={toggle.layout}
                active={toggle.menuActive}
                onClickAway={hideOverlay('menu')}
              />
            </div>
          </ScrollPanel>
        </div>

        <div className="layout-main">
          <AppBreadcrumb />
          <div className="layout-content">
            <SecureComponent {...componentProps} />
            <AppFooter />
          </div>
        </div>

        <AppRightPanel
          expanded={toggle.rightPanelActive}
          onContentClick={onRightPanelClick}
          onClickAway={hideOverlay('rightPanel')}
        />

        <div className="layout-mask" />
      </div>
      }
    </div>
  );
};

SecureLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  menuState: PropTypes.shape({}).isRequired,
  SecureComponent: (props, propName) => {
    if (props[propName] && !isValidElementType(props[propName])) {
      return new Error(
        `Invalid prop 'SecureComponent' supplied to 'SecureLayout': the prop is not a valid React component`,
      );
    }
  },
};

const ConnectedLayout = connect(({ menu }) => ({ menuState: menu }))(SecureLayout);

export const withSecureLayout = SecureComponent => props => (
  <ConnectedLayout {...props} SecureComponent={SecureComponent} />
);
