import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./gridWithAllPictures.module.css";

class GridWithAllPictures extends Component {
  render() {
    console.log(this.props.gallery);
    return (
      <div className={styles.gridWithAllPictures}>
        {this.props.gallery.map((el) => {
          return (
            <div
              className={styles.pic}
              style={{ backgroundImage: `url(${el.url})` }}
            ></div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, null)(GridWithAllPictures);
