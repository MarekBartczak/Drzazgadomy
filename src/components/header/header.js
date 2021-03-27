import React, { Component } from "react";
import styles from "./header.module.css";
import Background from "./background/background";
import Navbar from "./navbar/navbar";
import CalllRequestForm from "./callRequestForm/callRequestForm";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.nameBox}>
          <div className={styles.name}>Nazwa Firmy</div>
          <div className={styles.companyText}>Najlepsze Domki</div>
        </div>
        <Background />

        <Navbar />
        <CalllRequestForm />
      </div>
    );
  }
}

export default Header;
