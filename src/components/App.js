/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';


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
