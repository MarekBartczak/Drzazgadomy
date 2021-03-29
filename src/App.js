import React, { Component } from "react";
import Aux from "./hoc/aux";

import Header from "./components/topSection/header";
import ShortAboutSection from "./components/ShortAboutSection/shortAboutSection";
import MainSection from "./components/MainSection/itemSection/mainSection";
import Footer from "./components/footerSection/footer";
import CallRequestForm from "./components/callRequestForm/callRequestForm";

import NavBar from "./components/topSection/navbar/navbar";
class App extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        {/* <Header /> */}
        {/* <CallRequestForm /> */}
        {/* <ShortAboutSection /> */}
        {/* <MainSection /> */}
        {/* <Footer /> */}
      </Aux>
    );
  }
}

export default App;
