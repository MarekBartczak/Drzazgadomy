import React, { Component } from "react";
import styles from "./header.module.css";
import Background from "./background/background";
import Navbar from "./navbar/navbar";
import CalllRequestForm from "./callRequestForm/callRequestForm";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Background />
        <div className={styles.nameBox}>
          <div className={styles.name}>Nazwa Firmy</div>
          <div className={styles.companyText}>Najlepsze Domki</div>
        </div>
        <Navbar />
        <CalllRequestForm />
      </div>
    );
  }
}

export default Header;
