import React, { Component } from "react";
import styles from "./navbar.module.css";
import Hamburger from "../hamburger/hamburger";

class Navbar extends Component {
  scrollTo = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.name}></div>
        <Hamburger />
        <div className={styles.nav}>
          <div className={styles.home}>Strona Główna</div>
          <div className={styles.about}>O Firmie</div>
          <div className={styles.offer} onClick={this.scrollTo}>
            Oferta
          </div>
          <div className={styles.howWebuild}>Etapy Budowy</div>
          {/* <div className={styles.contactUs}>Galeria</div> */}
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

export default Navbar;
