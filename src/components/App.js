/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
// eslint-disable-next-line no-unused-vars
import operate from '../logic/operate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: false,
      operation: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    console.log(buttonName);
    const operatorReturn = ['+/-', 'AC'];
    if (buttonName === operatorReturn.filter((operator) => operator === buttonName)[0]) {
      const total = calculate(this.state, buttonName);
      this.setState({
        total,
        next: false,
        operation: false,
      });
    }

    const operatorSigns = ['+', '-', 'x', '÷', '%', '.'];
    console.log(operatorSigns.filter((operator) => operator === buttonName)[0]);
    if (buttonName === operatorSigns.filter((operator) => operator === buttonName)[0]) {
      console.log('enter operator');
      this.setState({
        operation: buttonName,
      });
    } else if ((this.state.operation === false)) {
      this.setState({ total: buttonName });
    } else if ((this.state.operation !== false)) {
      this.setState({ next: buttonName });
    }
    if (buttonName === '=') {
      if ((this.state.next !== false && this.state.operation !== false)) {
        const total = calculate(this.state, buttonName);
        this.setState({
          total,
          next: false,
          operation: false,
        });
      } else {
        this.setState({
          total: this.state.total,
          next: false,
          operation: false,
        });
      }
    }
  }


  render() {
    const { total, next } = this.state;
    console.log('en render this state==>', this.state);
    const displayValue = total ? (next ? next.toString() : total.toString()) : '0';
    console.log(displayValue);
    return (
      <div className="bodyApp">
        <Display result={displayValue} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
