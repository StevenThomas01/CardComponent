import React, { Component } from "react"
import CardList from "./CardList"
import Form from "./Form"

class App extends Component {
  
  // Rule: 'const cards' can't be used in class, thus need be in state.
  state = { cards: [
    { 
      key: 1,
      name: "Firstname",
      avitar: "https://avatars0.githubusercontent.com/u/2?v=3",
      company: "IE"
    },
    { 
      key: 2,
      name: "Secondname",
      avitar: "https://avatars0.githubusercontent.com/u/4?v=3",
      company: "BA"
    }
  ]
  };

  render() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
