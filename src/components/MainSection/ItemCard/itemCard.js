import React, { Component } from "react";
import styles from "./itemCard.module.css";
import Aux from "../../../hoc/aux";

class ItemCard extends Component {
  state = {
    currentPhoto: this.props.ItemCardPictureUrl,
  };

  switchPhoto = (photo) => {
    this.setState({ currentPhoto: photo });
  };

  render() {
    return (
      <Aux>
        <div
          className={styles.itemCard}
          style={{ animationPlayState: this.props.animation }}
        >
          <div className={styles.line}></div>
          <div className={styles.header}> {this.props.ItemCardHeader}</div>
          <div className={styles.info}>
            <ul className={styles.list}>
              <li>Wymiary: {this.props.size}</li>
              <li>Koszt: {this.props.price}</li>
              <li>W cenie: {this.props.include}</li>
            </ul>
          </div>
          <div className={styles.number}>{this.props.number}</div>
          <div className={styles.lineBottom}></div>
          <div className={styles.smallPicBox}>
            <div
              className={styles.smallPic}
              onClick={() => this.switchPhoto(this.props.ItemCardPictureUrl)}
              style={{
                backgroundImage: `url(${this.props.ItemCardPictureUrl}`,
              }}
            ></div>
            <div
              className={styles.smallPic}
              onClick={() => this.switchPhoto(this.props.side1)}
              style={{
                backgroundImage: `url(${this.props.side1})`,
              }}
            ></div>
            <div
              className={styles.smallPic}
              onClick={() => this.switchPhoto(this.props.side2)}
              style={{
                backgroundImage: `url(${this.props.side2})`,
              }}
            ></div>
          </div>

          <div
            className={styles.pic}
            style={{
              backgroundImage: `url(${this.state.currentPhoto})`,
            }}
          ></div>
        </div>
      </Aux>
    );
  }
}

export default ItemCard;
