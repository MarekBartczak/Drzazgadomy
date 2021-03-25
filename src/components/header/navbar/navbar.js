import React, { Component } from "react";
import styles from "./navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.name}>Nazwa Firmy</div>
        <div className={styles.nav}>
          <div className={styles.home}>Strona Główna</div>
          <div className={styles.about}>O Firmie</div>
          <div className={styles.services}>Usługi</div>
          <div className={styles.contactUs}>Napisz do nas</div>
          <div className={styles.phone}>
            <a href="tel:+48342234345">+48 342 234 345</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
