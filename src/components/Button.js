/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/style.json';

const whatStyle = (color, wide) => ({
  background: color,
  width: wide ? style.buttonWidth.wide : style.buttonWidth.normal,
});

class Button extends React.Component {
  render() {
    return (
      <button type="button" style={whatStyle(this.props.color, this.props.wide)} id={`btn-${this.props.buttonName}`}>
        {this.props.buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = { color: style.color.orange, wide: false };

export default Button;
