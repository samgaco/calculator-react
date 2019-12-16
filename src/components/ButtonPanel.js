/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  handleClick(buttonName) {
    this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <div>
        <div className="gbutton group-1">
          <Button clickHandler={this.handleClick} buttonName="AC" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="+/-" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="%" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="÷" />
        </div>
        <div className="gbutton group-2">
          <Button clickHandler={this.handleClick} buttonName="7" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="8" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="9" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="x" />
        </div>
        <div className="gbutton group-3">
          <Button clickHandler={this.handleClick} buttonName="4" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="5" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="6" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="-" />
        </div>
        <div className="gbutton group-4">
          <Button clickHandler={this.handleClick} buttonName="1" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="2" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="3" color="grey" />
          <Button clickHandler={this.handleClick} buttonName="+" />
        </div>
        <div className="gbutton group-5">
          <Button clickHandler={this.handleClick} buttonName="0" color="grey" wide />
          <Button clickHandler={this.handleClick} buttonName="." color="grey" />
          <Button clickHandler={this.handleClick} buttonName="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
