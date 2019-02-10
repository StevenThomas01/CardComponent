import React, { Component } from "react";

const CardFunct = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img width="75" src="https://avatars0.githubusercontent.com/u/1?v=4" />
      <div style={{ display: "inline-block", margin: 10 }}>
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          Paul O’Shannessy
        </div>
        <div>Facebook</div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div>
      <CardFunct />
    </div>
  );
};

class Card extends Component {
  render() {
    return <CardList />;
  }
}

export default Card;
