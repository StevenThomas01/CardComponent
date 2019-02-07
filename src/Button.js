import React, { Component } from 'react'

class Button extends Component {
  
  clickHandler = () => { 
     this.props.onClickFunction(this.props.incrementValue);
  };
  
  render() {
  	return (<button onClick={this.clickHandler}> 
      {this.props.incrementValue}</button>);
  }
}

export default Button;