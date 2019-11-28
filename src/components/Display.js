/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        {this.props.result}
      </div>
    );
  }
}

Display.defaultProps = { result: '0' };

export default Display;
