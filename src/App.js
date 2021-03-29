import React, { Component } from "react";
import Aux from "./hoc/aux";

import NavBar from "./components/topSection/navbar/navbar";
import Background from "./components/topSection/background/background";

class App extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <Background />
        {/* <CallRequestForm /> */}
        {/* <ShortAboutSection /> */}
        {/* <MainSection /> */}
        {/* <Footer /> */}
      </Aux>
    );
  }
}

export default App;
