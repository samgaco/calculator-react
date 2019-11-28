/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <div className="group-1">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>÷</button>
        </div>
        <div className="group-2">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
        </div>
        <div className="group-3">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className="group-4">
          <button>1</button>
          <button>2/-</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className="group-5">
          <button>o</button>
          <button>.</button>
        </div>
      </div>
    );
  }
}
