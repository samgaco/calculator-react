/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <div className="group-1">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button">÷</button>
        </div>
        <div className="group-2">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button">X</button>
        </div>
        <div className="group-3">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button">-</button>
        </div>
        <div className="group-4">
          <button type="button">1</button>
          <button type="button">2/-</button>
          <button type="button">3</button>
          <button type="button">+</button>
        </div>
        <div className="group-5">
          <button type="button">o</button>
          <button type="button">.</button>
        </div>
      </div>
    );
  }
}

ButtonPanel.defaultProps = { result: '0' };

export default ButtonPanel;

