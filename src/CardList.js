import React, { Component } from "react";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img width="75" src={props.avitar} alt="" />
      <div style={{ display: "inline-block", margin: 10 }}>
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

class CardList extends Component {
  render() {
    return (
    <div>
      { this.props.cards.map(card => <Card {...card} />) }
    </div>
  );
  }
}

export default CardList;