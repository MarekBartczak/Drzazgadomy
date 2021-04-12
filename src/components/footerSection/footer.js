import React, { Component } from "react";
import styles from "./footer.module.css";
import Aux from "../../hoc/aux";
import { connect } from "react-redux";

class Footer extends Component {
  scrollTo = (el) => {
    // document.documentElement
    window.scrollTo({
      top: this.props.componentsTop[el] - 100,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <Aux>
        <div className={styles.footer}>
          <div
            className={styles.logo}
            onClick={() => this.scrollTo("home")}
          ></div>
          <div className={styles.links}>
            {/* <div
              className={styles.about}
              onClick={() => this.scrollTo("shortAboutTop")}
            >
              O Firmie
            </div> */}
            <a
              className={styles.carpentry}
              href="http://www.zabudowyletniskowe.pl/"
            >
              {" "}
              Stolarnia Gronek
            </a>
            <a
              className={styles.carpentry}
              href="http://pracowniapanafranciszka.pl/"
            >
              {" "}
              Pracownia Pana Franciszka
            </a>
            <a
              className={styles.carpentry}
              href="http://konstrukcjedrewniane.eu/"
            >
              {" "}
              Konstrukcje Drewniane
            </a>
            <div className={styles.phone}>
              <a href="tel:+48342234345">tel: +32312312 </a>
            </div>
            <div className={styles.mail}>
              <a href="mailto:stolarz@drzazga.pl">email: stolarz@drzazga.pl</a>{" "}
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, null)(Footer);
