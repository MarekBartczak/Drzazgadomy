import React, { Component } from "react";
import Aux from "./hoc/aux";

import NavBar from "./components/topSection/navbar/navbar";
import Background from "./components/topSection/background/background";
import ShortAboutSection from "./components/ShortAboutSection/shortAboutSection";
import CallRequestForm from "./components/callRequestForm/callRequestForm";
import Items from "./components/MainSection/itemSection/mainSection";
// import Gallery from "./components/MainSection/Gallery/gallery";
import Footer from "./components/footerSection/footer";
class App extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <Background />
        <CallRequestForm />
        <ShortAboutSection />
        {/* <ShortAboutSection /> */}
        <Items />
        {/* <Gallery /> */}
        <Footer />
      </Aux>
    );
  }
}

export default App;
