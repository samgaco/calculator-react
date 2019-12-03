/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <div className="gbutton group-1">
          <Button buttonName="AC" color="grey" />
          <Button buttonName="+/-" color="grey" />
          <Button buttonName="%" color="grey" />
          <Button buttonName="÷" />
        </div>
        <div className="gbutton group-2">
          <Button buttonName="7" color="grey" />
          <Button buttonName="8" color="grey" />
          <Button buttonName="9" color="grey" />
          <Button buttonName="X" />
        </div>
        <div className="gbutton group-3">
          <Button buttonName="4" color="grey" />
          <Button buttonName="5" color="grey" />
          <Button buttonName="6" color="grey" />
          <Button buttonName="-" />
        </div>
        <div className="gbutton group-4">
          <Button buttonName="1" color="grey" />
          <Button buttonName="2" color="grey" />
          <Button buttonName="3" color="grey" />
          <Button buttonName="+" />
        </div>
        <div className="gbutton group-5">
          <Button buttonName="0" color="grey" wide />
          <Button buttonName="." color="grey" />
          <Button buttonName="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
