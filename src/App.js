import React, { Component } from "react";
import Aux from "./hoc/aux";

import Header from "./components/header/header";
import ShortAboutSection from "./components/ShortAboutSection/shortAboutSection";
import MainSection from "./components/MainSection/mainSection";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <ShortAboutSection />
        <MainSection />
        <Footer />
      </Aux>
    );
  }
}

export default App;
