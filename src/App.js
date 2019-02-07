import React, { Component } from 'react';
import Button from './Button';

// Rule: Result is a html element and any attributes are accessed via props.
const Result = (props) => {
  return(<div>{props.counter}</div>)
}

class App extends Component {
  state = {counter: 0};

  // Rule: incrementCounter is an arrow function.
  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({ 
  		counter: prevState.counter + incrementValue 
    }))
  };

  render() {
    // Rule: attributes are properties and are accessed via e.g. this.props.onClickFunction (used within the control)
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} /> 
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

// Rule: 'export' doesn't work when append to class within VS Code.
export default App;
