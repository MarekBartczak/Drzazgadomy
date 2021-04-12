import React, { Component } from "react";
import styles from "./navbar.module.css";
import Hamburger from "../hamburger/hamburger";
import { connect } from "react-redux";
import RightSlide from "../../rightSlide/rightSlide";

class Navbar extends Component {
  scrollTo = (el) => {
    // document.documentElement
    window.scrollTo({
      top: this.props.componentsTop[el],
      behavior: "smooth",
    });
  };

  // getClass = (el) => {
  //   console.log(el);
  //   // window.scro
  //   console.log(document.querySelector(`.${el}`).offsetParent.offsetTop);
  //   // console.log(document.documentElement(el));
  // };
  render() {
    return (
      <div className={styles.navbar}>
        <div
          className={styles.name}
          onClick={() => this.scrollTo("home")}
        ></div>
        <Hamburger />
        <RightSlide toggle={!this.props.hamburgerMenu.isClose} />

        <div className={styles.nav}>
          <div className={styles.home} onClick={() => this.scrollTo("home")}>
            Strona Główna
          </div>
          <div
            className={styles.about}
            onClick={() => this.scrollTo("shortAboutTop")}
          >
            O Firmie
          </div>
          <div
            className={styles.offer}
            onClick={() => this.scrollTo("offerTop")}
          >
            Oferta
          </div>
          <div
            className={styles.howWebuild}
            // onClick={() => this.scrollTo("howWeBuild")}
            onClick={() => this.scrollTo("howWeBuild")}
          >
            Etapy Budowy
          </div>
        </div>
        <div className={styles.phoneMobile}>
          <a href="tel:+48342234345">
            {" "}
            <i className="fas fa-phone-alt"></i>
          </a>
        </div>
        <div className={styles.phone}>
          <a href="tel:+48342234345">+48 342 234 345</a>
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

export default connect(mapStateToProps, null)(Navbar);
