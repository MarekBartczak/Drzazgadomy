import React, { Component } from "react";
import styles from "./howWeBuild.module.css";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/actions";
import Aux from "../../hoc/aux";

class HowWeBuild extends Component {
  state = {
    showIndexImg: 0,
    animation: "paused",
  };
  componentDidMount() {
    this.props.onSaveoffsetTop(this.showEl.offsetTop - 20);
    // this.props.onSaveoffsetTop(this.showEl.classList.value);
    window.addEventListener("scroll", () => {
      let position = this.props.componentsTop.howWeBuild;
      if (document.documentElement.scrollTop > position - 600) {
        this.setState({ animation: "running" });
      }
    });
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

  gallery = () => {
    return (
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
        </div>
        <div className={styles.arrowRight}>
          <i
            className="fas fa-arrow-right fa-7x"
            onClick={() => this.changePic("next")}
          ></i>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Aux>
        <div className={styles.title} ref={(el) => (this.showEl = el)}>
          Etapy Budowy
        </div>
        <div
          className={styles.howWeBuild}
          style={{ animationPlayState: this.state.animation }}
        >
          <div className={styles.position}>
            {this.gallery()}

            <div className={styles.description}>
              Nasze domki wykonujemy z balika ??wierkowego lub sosnowego (145/45
              mm) w technologii w??g??owej, tzn z wyci??ciem w naro??nikach,
              pozwalaj??cym na zaz??bienie si?? kolejnych warstw ??cian tworz??c
              zwart?? i mocn?? konstrukcj??.
              <br />
              <br />
              Materia??y wykorzystywane do produkcji naszych domk??w s?? najwy??szej
              jako??ci. <br /> Jeste??my producentem, dlatego mo??emy si??
              dostosowa?? do indywidualnych preferencji klienta.
              <br />
            </div>
          </div>
        </div>
      </Aux>
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
