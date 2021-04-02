import React, { Component } from "react";
import styles from "./itemCard.module.css";
import Aux from "../../../hoc/aux";

class ItemCard extends Component {
  render() {
    // console.log(this.props.animation);
    return (
      <Aux>
        <div
          className={styles.itemCard}
          style={{ animationPlayState: this.props.animation }}
        >
          <div className={styles.line}></div>
          <div className={styles.header}> {this.props.ItemCardHeader}</div>
          <div className={styles.info}>{this.props.ItemCardDescription}</div>
          <div className={styles.number}>{this.props.number}</div>
          <div className={styles.lineBottom}></div>

          <div
            className={styles.pic}
            style={{
              backgroundImage: `url(${this.props.ItemCardPictureUrl})`,
            }}
          ></div>
        </div>
      </Aux>
    );
  }
}

export default ItemCard;
