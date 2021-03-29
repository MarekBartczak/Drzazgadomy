import React, { Component } from "react";
import styles from "./hamburger.module.css";
import * as actionsTypes from "../../../store/actions/actions";
import { connect } from "react-redux";

class Hamburger extends Component {
  //   state = {
  //     isOpen: false,
  //   };

  hamburgerToggleState = () => {
    this.props.onHamburgerToggle();
  };
  //   hamburgetToggle = (state) => {

  //   }
  render() {
    return (
      <div
        className={styles.hamburgerBox}
        onClick={() => this.hamburgerToggleState()}
      >
        <div
          className={
            this.props.hamburgerMenu.isClose
              ? styles.hamburgerOpen
              : styles.hamburger
          }
        ></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    // isOpen: state.isOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHamburgerToggle: () =>
      dispatch({ type: actionsTypes.HAMBURGER_MENU_TOGGLE }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
