/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button type="button">
        {this.props.buttonName}
      </button>
    );
  }
}


Button.propTypes = { buttonName: PropTypes.string.isRequired };
