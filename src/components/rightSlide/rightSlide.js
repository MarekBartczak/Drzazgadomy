import React, { Component } from "react";
import styles from "./rightSlide.module.css";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/actions";
import Button from "../NavBtn/navBtn";

class RightSlie extends Component {
  toggleSlide = () => {
    let cssStyle = [styles.rightSlide, styles.close];
    if (!this.props.toggle) {
    }
    if (this.props.toggle) {
      cssStyle = [styles.rightSlide, styles.open];
    }
    return cssStyle.join(" ");
  };

  render() {
    return (
      <div className={this.toggleSlide()}>
        <div className={styles.links}>
          {this.props.btns.map((el, index) => {
            return (
              <div key={index}>
                {" "}
                <Button
                  btnStyle={styles[el.style]}
                  sectionPosition={el.positionName}
                  btnName={el.name}
                  close={() => this.props.onCLoseRightSlide()}
                />
              </div>
            );
          })}
        </div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(RightSlie);
