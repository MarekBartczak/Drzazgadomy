import React, { Component } from "react";
import styles from "./background.module.css";

class Background extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.dimm}></div>
      </div>
    );
  }
}

export default Background;
