import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { InputText } from 'primereact/components/inputtext/InputText';
import { clickAway } from './ClickAway';

class AppTopbar extends Component {

  static defaultProps = {
    onMenuButtonClick: null,
    onTopbarMenuButtonClick: null,
    onTopbarItemClick: null,
    profileMode: null,
    horizontal: false,
    topbarMenuActive: false,
    activeTopbarItem: null,
    onRightPanelButtonClick: null,
  };

  static propTypes = {
    onMenuButtonClick: PropTypes.func.isRequired,
    onTopbarMenuButtonClick: PropTypes.func.isRequired,
    onTopbarItemClick: PropTypes.func.isRequired,
    profileMode: PropTypes.string.isRequired,
    horizontal: PropTypes.bool.isRequired,
    topbarMenuActive: PropTypes.bool.isRequired,
    activeTopbarItem: PropTypes.string,
    onRightPanelButtonClick: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {};
  }

  onTopbarItemClick(event, item) {
    if (this.props.onTopbarItemClick) {
      this.props.onTopbarItemClick({
        originalEvent: event,
        item: item,
      });
    }
  }

  render() {
    let topbarItemsClassName = classNames('topbar-items animated fadeInDown', { 'topbar-items-visible': this.props.topbarMenuActive });

    return <div className="topbar clearfix">
      <div className="topbar-left">
        <div className="logo"></div>
      </div>

      <div className="topbar-right">
        <button className="p-link" id="menu-button" onClick={this.props.onMenuButtonClick}>
          <i name="menuToggle"></i>
        </button>

        <button className="p-link" id="rightpanel-menu-button" onClick={this.props.onRightPanelButtonClick}>
          <i className="material-icons">more_vert</i>
        </button>

        <button className="p-link" id="topbar-menu-button" onClick={this.props.onTopbarMenuButtonClick}>
          <i className="material-icons">menu</i>
        </button>
        <ul className={topbarItemsClassName}>
          {(this.props.profileMode === 'top' || this.props.horizontal) &&
          <li className={classNames('profile-item', { 'active-top-menu': this.props.activeTopbarItem === 'profile' })}>
            <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'profile')}>
              <img className="profile-image" src="assets/layout/images/avatar.png" alt="Profile" />
              <span className="topbar-item-name">Jane Williams</span>
            </button>

            <ul className="ultima-menu animated fadeInDown">
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">person</i>
                  <span>Profile</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">security</i>
                  <span>Privacy</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">settings_applications</i>
                  <span>Settings</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">power_settings_new</i>
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </li>}

          <li className={classNames({ 'active-top-menu': this.props.activeTopbarItem === 'settings' })}>
            <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'settings')}>
              <i className="topbar-icon material-icons">settings</i>
              <span className="topbar-item-name">Settings</span>
            </button>
            <ul className="ultima-menu animated fadeInDown">
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">palette</i>
                  <span>Change Theme</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">favorite_border</i>
                  <span>Favorites</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">lock</i>
                  <span>Lock Screen</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">wallpaper</i>
                  <span>Wallpaper</span>
                </button>
              </li>
            </ul>
          </li>
          <li className={classNames({ 'active-top-menu': this.props.activeTopbarItem === 'messages' })}>
            <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'messages')}>
              <i className="topbar-icon material-icons animated swing">message</i>
              <span className="topbar-badge animated rubberBand">5</span>
              <span className="topbar-item-name">Messages</span>
            </button>
            <ul className="ultima-menu animated fadeInDown">
              <li role="menuitem">
                <button className="p-link topbar-message">
                  <img src="assets/layout/images/avatar1.png" width="35" alt="avatar1" />
                  <span>Give me a call</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link topbar-message">
                  <img src="assets/layout/images/avatar2.png" width="35" alt="avatar2" />
                  <span>Sales reports attached</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link topbar-message">
                  <img src="assets/layout/images/avatar3.png" width="35" alt="avatar3" />
                  <span>About your invoice</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link topbar-message">
                  <img src="assets/layout/images/avatar2.png" width="35" alt="avatar2" />
                  <span>Meeting today at 10pm</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link topbar-message">
                  <img src="assets/layout/images/avatar4.png" width="35" alt="avatar4" />
                  <span>Out of office</span>
                </button>
              </li>
            </ul>
          </li>
          <li className={classNames({ 'active-top-menu': this.props.activeTopbarItem === 'notifications' })}>
            <button className="p-link" onClick={(e) => this.onTopbarItemClick(e, 'notifications')}>
              <i className="topbar-icon material-icons">timer</i>
              <span className="topbar-badge animated rubberBand">4</span>
              <span className="topbar-item-name">Notifications</span>
            </button>
            <ul className="ultima-menu animated fadeInDown">
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">bug_report</i>
                  <span>Pending tasks</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">event</i>
                  <span>Meeting today at 3pm</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">file_download</i>
                  <span>Download documents</span>
                </button>
              </li>
              <li role="menuitem">
                <button className="p-link">
                  <i className="material-icons">flight</i>
                  <span>Book flight</span>
                </button>
              </li>
            </ul>
          </li>
          <li className={classNames('search-item', { 'active-top-menu': this.props.activeTopbarItem === 'search' })}
              onClick={(e) => this.onTopbarItemClick(e, 'search')}>
                                <span className="md-inputfield">
                                    <InputText type="text" />
                                    <label>Search</label>
                                    <i className="topbar-icon material-icons">search</i>
                                </span>
          </li>
        </ul>
      </div>
    </div>;
  }
}

export default clickAway(AppTopbar);
