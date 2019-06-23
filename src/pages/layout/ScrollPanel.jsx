import React from 'react';
import { ScrollPanel as PrimeScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel';

const styles = {
  scroller: { height: '100%' },
};

export default class ScrollPanel extends React.PureComponent {
  constructor() {
    super();
    this.scroller = null;
  }

  componentDidMount() {
    setTimeout(() => {
      if (!!this.scroller) {
        this.scroller.moveBar();
      }
    }, 500);
  }

  render() {
    return (
      <PrimeScrollPanel
        style={styles.scroller}
        ref={ref => {
          this.scroller = ref;
        }}
      >
        {this.props.children}
      </PrimeScrollPanel>
    );
  }
}
