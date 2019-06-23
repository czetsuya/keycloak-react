import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isValidElementType } from 'react-is';

class ClickAway extends PureComponent {
  constructor() {
    super();
    this.contentRef = null;
  }

  static propTypes = {
    onClickAway: PropTypes.func,
    Content: (props, propName) => {
      if (props[propName] && !isValidElementType(props[propName])) {
        return new Error(
          `Invalid prop 'Content' supplied to 'ClickAway': the prop is not a valid React component`,
        );
      }
    },
  };

  static defaultProps = {
    onClickAway: () => null,
  };

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickAway);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickAway);
  };

  handleClickAway = event => {
    if (this.contentRef && !this.contentRef.contains(event.target)) {
      const name = event.target.getAttribute('name');
      this.props.onClickAway(name || "");
    }
  };

  render = () => {
    const { Content, onClickAway, ...contentProps } = this.props;
    return (
      <div ref={ref => {
        this.contentRef = ref;
      }}><Content {...contentProps} /></div>
    );
  };
}

export const clickAway = Content => props => (
  <ClickAway {...props} Content={Content} />
);
