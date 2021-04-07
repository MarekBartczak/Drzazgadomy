import React, { Component } from "react";
import styles from "./rightSlide.module.css";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/actions";
import smoothscroll from "smoothscroll-polyfill";

class RightSlie extends Component {
  toggleSlide = () => {
    let cssStyle = [styles.rightSlide, styles.close];
    if (!this.props.toggle) {
    }
    if (this.props.toggle) {
      cssStyle = [styles.rightSlide, styles.open];
    }
    return cssStyle.join(" ");
  };
  scrollTo = (el) => {
    smoothscroll.polyfill();

    window.scrollTo({
      top: this.props.componentsTop[el] - 100,
      behavior: "smooth",
    });
    this.props.onCLoseRightSlide();
  };

  render() {
    return (
      <div className={this.toggleSlide()}>
        <div className={styles.links}>
          <div className={styles.home} onClick={() => this.scrollTo("home")}>
            Strona Główna
          </div>
          <div
            className={styles.shortAbout}
            onClick={() => this.scrollTo("shortAboutTop")}
          >
            {" "}
            O Firmie
          </div>
          <div
            className={styles.offer}
            onClick={() => this.scrollTo("offerTop")}
          >
            {" "}
            Oferta
          </div>
          <div
            className={styles.buildSteps}
            onClick={() => this.scrollTo("howWeBuild")}
          >
            {" "}
            Etapy Budowy
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispach) => {
  return {
    onCLoseRightSlide: () =>
      dispach({ type: actionsTypes.HAMBURGER_MENU_TOGGLE }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RightSlie);
