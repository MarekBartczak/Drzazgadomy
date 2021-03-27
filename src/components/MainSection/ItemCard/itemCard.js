import React, { Component } from "react";
import styles from "./itemCard.module.css";

class ItemCard extends Component {
  render() {
    console.log(this.props.ItemCardPictureUrl);
    return (
      <div className={styles.itemCard}>
        <div
          className={styles.pic}
          style={{
            backgroundImage: `url(${this.props.ItemCardPictureUrl})`,
          }}
        ></div>
        <div className={styles.header}> {this.props.ItemCardHeader}</div>
        <div className={styles.info}>{this.props.ItemCardDescription}</div>
      </div>
    );
  }
}

export default ItemCard;
