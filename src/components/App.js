/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from './logic/calculate';


class App extends React.Component {
  render() {
    return (
      <div className="bodyApp">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);


export default App;
