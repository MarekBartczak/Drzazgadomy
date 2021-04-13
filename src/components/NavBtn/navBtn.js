import React, { Component } from "react";
import { connect } from "react-redux";
import smoothscroll from "smoothscroll-polyfill";

class Button extends Component {
  render() {
    return (
      <div
        className={[this.props.btnStyle]}
        onClick={() => {
          smoothscroll.polyfill();
          window.scrollTo({
            top: this.props.componentsTop[this.props.sectionPosition] - 100,
            behavior: "smooth",
          });
          this.props.close();
        }}
      >
        {this.props.btnName}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, null)(Button);
