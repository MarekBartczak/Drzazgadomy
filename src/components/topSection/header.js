import React, { Component } from "react";
import styles from "./header.module.css";
import Aux from "../../hoc/aux";

class Header extends Component {
  render() {
    return (
      <Aux>
        <div className={styles.header}>
          <div className={styles.nameBox}>
            <div className={styles.name}>Drzazga Domy</div>
            <div className={styles.companyText}>Wykonane węgłowo</div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Header;
