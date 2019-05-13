import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel';
import { clickAway } from './ClickAway';

class AppRightPanel extends Component {

  constructor() {
    super();
    this.rightPanelMenuScroller = null;
  }

  static defaultProps = {
    onContentClick: null,
    expanded: false,
  };

  static propTypes = {
    onContentClick: PropTypes.func.isRequired,
    expanded: PropTypes.bool,
  };

  componentDidMount() {
    setTimeout(() => {
      this.rightPanelMenuScroller.moveBar();
    }, 100);
  }

  render() {
    let className = classNames('layout-rightpanel', { 'layout-rightpanel-active': this.props.expanded });

    return <div className={className} onClick={this.props.onContentClick}>
      <ScrollPanel ref={(el) => {
        this.rightPanelMenuScroller = el;
      }} style={{ height: '100%' }}>
        <div className="right-panel-scroll-content">
          <div className="layout-rightpanel-header">
            <div className="weather-day">Wednesday</div>
            <div className="weather-date">Jan 26</div>
          </div>

          <div className="layout-rightpanel-content">
            <h1>Weather</h1>
            <h2>San Francisco, USA</h2>

            <div className="weather-today">
              <span className="weather-today-value">21&#8451;</span>
              <img src="assets/layout/images/dashboard/weather-icon-2.svg" width="60" alt="weather2" />
            </div>

            <ul className="weekly-weather">
              <li>
                Thursday
                <img src="assets/layout/images/dashboard/weather-icon-1.svg" alt="weather1" />
                <span className="weekly-weather-value">24</span>
              </li>
              <li>
                Friday
                <img src="assets/layout/images/dashboard/weather-icon-3.svg" alt="weather3" />
                <span className="weekly-weather-value">19</span>
              </li>
              <li>
                Saturday
                <img src="assets/layout/images/dashboard/weather-icon-4.svg" alt="weather4" />
                <span className="weekly-weather-value">15</span>
              </li>
              <li>
                Sunday
                <img src="assets/layout/images/dashboard/weather-icon-1.svg" alt="weather1" />
                <span className="weekly-weather-value">24</span>
              </li>
              <li>
                Monday
                <img src="assets/layout/images/dashboard/weather-icon-2.svg" alt="weather2" />
                <span className="weekly-weather-value">21</span>
              </li>
              <li>
                Tuesday
                <img src="assets/layout/images/dashboard/weather-icon-3.svg" alt="weather3" />
                <span className="weekly-weather-value">20</span>
              </li>
            </ul>
          </div>
        </div>
      </ScrollPanel>

    </div>;
  }
}

export default clickAway(AppRightPanel);
