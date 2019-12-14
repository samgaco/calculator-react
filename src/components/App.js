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
      total: 0,
      next: false,
      operation: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const operatorReturn = ['+/-', 'AC', '.'];
    if (buttonName === operatorReturn.filter((operator) => operator === buttonName)[0]) {
      const total = calculate(this.state, buttonName);
      this.setState({
        total,
        next: false,
        operation: false,
      });
      if (buttonName === '.' && this.state.next === null) {
        this.setState({
          operation: '.',
        });
      }
    } else {
      const operatorSigns = ['+', '-', 'x', '÷', '%'];
      if (buttonName === operatorSigns.filter((operator) => operator === buttonName)[0]) {
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

    if (this.state.total !== 0 && this.state.operation === false) {
      const toAvoid = ['.','0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (buttonName === toAvoid.filter((operator) => operator === buttonName)[0]) {
        this.setState({
          total: [this.state.total, buttonName].join(''),
        });
      }
    }

    if (this.state.next !== false && this.state.operation !== false) {
      const toAvoid = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      if (buttonName === toAvoid.filter((operator) => operator === buttonName)[0]) {
        this.setState({
          next: [this.state.next, buttonName].join(''),
        });
      }
    }
  }


  render() {
    const { total, next } = this.state;
    const displayValue = total ? (next ? next.toString() : total.toString()) : '0';
    return (
      <div className="bodyApp">
        <Display result={displayValue} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
