import React, { Component } from "react";

const CardFunct = props => {
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

const CardList = (props) => {
  return (
    <div>
      { props.cards.map(card => <CardFunct {...card} />) }
    </div>
  );
};

const data = [
  { name: "Firstname",
    avitar: "https://avatars0.githubusercontent.com/u/1?v=4",
    company: "IE"
  },
  { name: "Secondname",
    avitar: "https://avatars0.githubusercontent.com/u/1?v=4",
    company: "BA"
  }
]

class Card extends Component {
  render() {
    return <CardList cards={data} />;
  }
}

export default Card;
