import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { clickAway } from './ClickAway';

class AppSubmenu extends Component {

  static defaultProps = {
    className: null,
    items: null,
    onMenuItemClick: null,
    onRootItemClick: null,
    root: false,
    layoutMode: null,
    menuActive: false,
    parentMenuItemActive: false,
  };

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    onMenuItemClick: PropTypes.func,
    onRootItemClick: PropTypes.func,
    root: PropTypes.bool,
    layoutMode: PropTypes.string,
    menuActive: PropTypes.bool,
    parentMenuItemActive: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onMenuItemClick(event, item, index) {
    //avoid processing disabled items

    if (item.disabled) {
      event.preventDefault();
      return true;
    }

    if (this.props.root && this.props.onRootItemClick) {
      this.props.onRootItemClick({
        originalEvent: event,
        item: item,
      });
    }

    //execute command
    if (item.command) {
      item.command({ originalEvent: event, item: item });
    }

    if (index === this.state.activeIndex)
      this.setState({ activeIndex: null });
    else
      this.setState({ activeIndex: index });

    if (this.props.onMenuItemClick) {
      this.props.onMenuItemClick({
        originalEvent: event,
        item: item,
      });
    }
  }

  onMenuItemMouseEnter(index) {
    if (this.props.root && this.props.menuActive && this.isHorizontalOrSlim()) {
      this.setState({ activeIndex: index });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.parentMenuItemActive === false) {
      return {
        activeIndex: null,
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.isHorizontalOrSlim() && prevProps.menuActive && !this.props.menuActive) {
      this.setState({ activeIndex: null });
    }
  }

  isHorizontalOrSlim() {
    return (this.props.layoutMode === 'horizontal' || this.props.layoutMode === 'slim');
  }

  renderLinkContent(item) {
    let submenuIcon = item.items && <i className="material-icons submenu-icon">keyboard_arrow_down</i>;
    let badge = item.badge && <span className="menuitem-badge">{item.badge}</span>;

    return (
      <React.Fragment>
        <i className="material-icons">{item.icon}</i>
        <span>{item.label}</span>
        {badge}
        {submenuIcon}
      </React.Fragment>
    );
  }

  renderLink(item, i) {
    let content = this.renderLinkContent(item);

    if (item.to) {
      return (
        <NavLink
          activeClassName="active-menuitem-routerlink"
          to={item.to}
          onClick={(e) => this.onMenuItemClick(e, item, i)}
          exact
          target={item.target}
          onMouseEnter={(e) => this.onMenuItemMouseEnter(i)}
          className={item.styleClass}
        >
          {content}
        </NavLink>
      );
    }
    else {
      return (
        <a className="ripplelink" href={item.url} onClick={(e) => this.onMenuItemClick(e, item, i)} target={item.target}
           onMouseEnter={(e) => this.onMenuItemMouseEnter(i)}>
          {content}
        </a>
      );

    }
  }

  render() {
    var items = this.props.items && this.props.items.map((item, i) => {
      let active = this.state.activeIndex === i;
      let styleClass = classNames(item.badgeStyleClass, { 'active-menuitem': active });
      let tooltip = this.props.root && <div className="layout-menu-tooltip">
        <div className="layout-menu-tooltip-arrow"></div>
        <div className="layout-menu-tooltip-text">{item.label}</div>
      </div>;

      return (
        <li className={styleClass} key={i}>
          {this.renderLink(item, i)}
          {tooltip}
          <AppSubmenu
            items={item.items}
            onMenuItemClick={this.props.onMenuItemClick}
            layoutMode={this.props.layoutMode}
            menuActive={this.props.menuActive}
            parentMenuItemActive={active}
          />
        </li>
      );
    });

    return <ul className={this.props.className}>{items}</ul>;
  }
}

class AppMenu extends Component {

  static defaultProps = {
    model: null,
    onMenuItemClick: null,
    onRootMenuItemClick: null,
    layoutMode: null,
    active: false,
  };

  static propTypes = {
    model: PropTypes.array,
    layoutMode: PropTypes.string,
    onMenuItemClick: PropTypes.func,
    onRootMenuItemClick: PropTypes.func,
    active: PropTypes.bool,
  };

  render() {
    return (
      <AppSubmenu
        items={this.props.model}
        className="ultima-menu ultima-main-menu clearfix"
        menuActive={this.props.active}
        onRootItemClick={this.props.onRootMenuItemClick}
        onMenuItemClick={this.props.onMenuItemClick}
        root={true}
        layoutMode={this.props.layoutMode}
        parentMenuItemActive={true}
      />
    );
  }
}

export default clickAway(AppMenu);
