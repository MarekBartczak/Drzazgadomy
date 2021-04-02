import React, { Component } from "react";
import styles from "./footer.module.css";
import Aux from "../../hoc/aux";

class Footer extends Component {
  render() {
    return (
      <Aux>
        <div className={styles.footer}>
          <div className={styles.logo}></div>
          <div className={styles.links}>
            <div className={styles.about}>O Firmie</div>
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
            <div className={styles.contact}>Kontakt</div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Footer;
