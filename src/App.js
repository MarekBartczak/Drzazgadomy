import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "./hoc/aux";

import BackDrop from "./components/backDrop/backDrop";
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
        {!this.props.hamburgerMenu.isClose ? <BackDrop /> : null}

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

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, null)(App);
