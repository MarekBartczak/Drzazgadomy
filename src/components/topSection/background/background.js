import React, { Component } from "react";
import styles from "./background.module.css";

class Background extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.dimm}></div>
        <div className={styles.nameBox}>
          <div className={styles.name}>Domki drewniane</div>
          <div className={styles.companyText}>
            dla klientów indywidualnych oraz biznesowych
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
