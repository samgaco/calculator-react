/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

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

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
