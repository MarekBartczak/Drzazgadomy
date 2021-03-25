import React, { Component } from "react";
import styles from "./callRequestForm.module.css";

class CallRequestForm extends Component {
  render() {
    return (
      <div className={styles.callRequestForm}>
        <div className={styles.title}>Zadzwonimy do Ciebie </div>
      </div>
    );
  }
}

export default CallRequestForm;
