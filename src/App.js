import React, { Component } from "react";
import Aux from "./hoc/aux";
import Header from "./components/header/header";

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
      </Aux>
    );
  }
}

export default App;
