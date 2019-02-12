import React, { Component } from "react";
import CardList from "./CardList";

const data = [
  { name: "Firstname",
    avitar: "https://avatars0.githubusercontent.com/u/1?v=4",
    company: "IE"
  },
  { name: "Secondname",
    avitar: "https://avatars0.githubusercontent.com/u/1?v=4",
    company: "BA"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <CardList cards={data} />
      </div>
    );
  }
}

export default App;
