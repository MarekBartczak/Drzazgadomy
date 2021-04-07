import React, { Component } from "react";
import styles from "./backDrop.module.css";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/actions";

class BackDrop extends Component {
  render() {
    return (
      <div
        className={styles.backDrop}
        onClick={() => this.props.onCLoseRightSlide()}
      ></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispach) => {
  return {
    onCLoseRightSlide: () =>
      dispach({ type: actionsTypes.HAMBURGER_MENU_TOGGLE }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);
