import React, { Component } from "react";
import styles from "./howWeBuild.module.css";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/actions";

class HowWeBuild extends Component {
  state = {
    showIndexImg: 0,
  };
  componentDidMount() {
    this.props.onSaveoffsetTop(this.showEl.offsetTop - 70);
  }

  changePic = (direction) => {
    let arrayLenght = this.props.howWeBuild.picturesUrl.length;

    if (direction === "back") {
      if (this.state.showIndexImg > 0) {
        this.setState({ showIndexImg: this.state.showIndexImg - 1 });
      } else {
        this.setState({ showIndexImg: arrayLenght - 1 });
      }
    }
    if (direction === "next") {
      if (this.state.showIndexImg < arrayLenght - 1) {
        this.setState({ showIndexImg: this.state.showIndexImg + 1 });
      } else {
        this.setState({ showIndexImg: 0 });
      }
    }
  };
  render() {
    return (
      <div className={styles.howWeBuild} ref={(el) => (this.showEl = el)}>
        <div className={styles.title}>Etapy Budowy</div>
        <div
          className={styles.mainPic}
          style={{
            backgroundImage: `url(${
              this.props.howWeBuild.picturesUrl[this.state.showIndexImg]
            })`,
          }}
        >
          <div className={styles.arrowLeft}>
            <i
              className="fas fa-arrow-left fa-7x"
              onClick={() => this.changePic("back")}
            ></i>
            {/* <div className={styles.left}></div> */}
          </div>
          <div className={styles.arrowRight}>
            <i
              className="fas fa-arrow-right fa-7x"
              onClick={() => this.changePic("next")}
            ></i>
          </div>
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
const mapDispatchToProps = (dispatch) => {
  return {
    onSaveoffsetTop: (top) =>
      dispatch({ type: actionsTypes.SAVE_HOW_WE_BUILD_TOP, saveTop: top }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HowWeBuild);
