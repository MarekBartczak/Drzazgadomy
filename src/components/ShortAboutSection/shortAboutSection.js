import React, { Component } from "react";
import styles from "./shortAboutSection.module.css";
import Aux from "../../hoc/aux";

class ShortAboutSection extends Component {
  render() {
    return (
      <Aux>
        <div className={styles.shortAboutSection}>
          <div className={styles.about}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              minima voluptate dolorum repudiandae, commodi eaque sunt facilis
              dolore. Id ex omnis, similique harum non animi! Beatae assumenda
              modi fugiat! Quo similique minus tempore blanditiis, saepe ratione
              assumenda maiores tenetur!
            </p>
          </div>
          <div className={styles.btns}>
            <button className={styles.ourProjects}>Nasze Projekty</button>
            <button className={styles.aboutUs}>O Firmie</button>
          </div>
        </div>
      </Aux>
    );
  }
}

export default ShortAboutSection;
