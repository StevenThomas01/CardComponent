import React, { Component } from "react"
import CardList from "./CardList"
import Form from "./Form"

class App extends Component {
  
  // Rule: 'const cards' can't be used in class, thus need be in state.
  // Rule: create empty array object.
  state = { cards: [] };

  addNewCard = (cardInfo) => {
    // Qs: No intelliscense for concat
    this.setState(prevState => ({ cards: prevState.cards.concat(cardInfo)}));
  };

  render() {
    return (
      <div>
        {/* // Rule: Child component cannot change state of parent
        // thus need pass via onSubmit */}
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
