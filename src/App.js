import React, { Component } from "react";
import Aux from "./hoc/aux";
import Header from "./components/header/header";
import ShortAboutSection from "./components/ShortAboutSection/shortAboutSection";

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <ShortAboutSection />
      </Aux>
    );
  }
}

export default App;
