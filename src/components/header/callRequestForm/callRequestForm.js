import React, { Component } from "react";
import styles from "./callRequestForm.module.css";

class CallRequestForm extends Component {
  render() {
    return (
      <div className={styles.callRequestForm}>
        <div className={styles.title}>Możemy do Ciebie zadzwonić </div>
        <div className={styles.textInfo}>
          Zostaw swoje imię, oraz numer telefonu. <br />
          Odezwiemy się najszybciej jak tylko będziemy mogli
        </div>

        <div className={styles.form}>
          <input
            className={styles.callRequestName}
            placeholder={"Imię"}
          ></input>
          <input
            className={styles.callRequestPhone}
            placeholder={"Nr telefonu"}
          ></input>
          <select className={styles.callRequestTime}>
            <option value="" selected disabled hidden>
              pora kontaktu
            </option>
            <option>O każdej porze</option>
            <option>Rano</option>
            <option>Południe</option>
            <option>Wieczór</option>
          </select>
          <button className={styles.callRequestBtn}>Proszę o kontakt</button>
        </div>
      </div>
    );
  }
}

export default CallRequestForm;
