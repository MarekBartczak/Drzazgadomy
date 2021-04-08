import React, { Component } from "react";
import styles from "./shortAboutSection.module.css";
import Aux from "../../hoc/aux";
import * as actionsTypes from "../../store/actions/actions";
import { connect } from "react-redux";

class ShortAboutSection extends Component {
  // onScrollFunc = () => {
  //   const scroll = this.whereElementRef;
  // };
  // aboutSlide

  state = {
    animation: "paused",
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      // console.log(
      //   document.documentElement.scrollHeight -
      //     document.documentElement.scrollTop
      // );
      if (document.documentElement.scrollTop > 100) {
        this.setState({ animation: "running" });
      }
    });
    this.props.onSaveoffsetTop(this.shortAbout.offsetTop);
    // console.log(this.whereElementRef.offsetHeight);
  }
  /* 

</div> */
  render() {
    // console.log(this.state.animation);
    return (
      <Aux>
        <div
          className={styles.shortAboutSection}
          ref={(n) => {
            this.shortAbout = n;
          }}
        >
          {" "}
          <div className={styles.title}>O Firmie</div>
          <div className={styles.about}>
            <div
              className={styles.where}
              style={{ animationPlayState: this.state.animation }}
            >
              <div className={styles.wherePic}></div>
              <div className={styles.whereText}>
                Wykonujemy zamówienia na terenie całej Polski oraz za granicą
              </div>
            </div>

            <div
              className={styles.whatWeUse}
              style={{ animationPlayState: this.state.animation }}
            >
              <div className={styles.whatWeUsePic}></div>
              <div className={styles.whatWeUseText}>
                Używamy drewna suszonego komorowo, impregnowanego o odpowiedniej
                wilgotności,
              </div>
            </div>

            <div
              className={styles.quality}
              style={{ animationPlayState: this.state.animation }}
            >
              <div className={styles.qualityPic}></div>
              <div className={styles.qualityText}>
                Podstawą w naszej firmie jest jakość i dbałość o szczegóły,
                dlatego zatrudniamy doświadczoną kadrę pracowniczą.
              </div>
            </div>
          </div>
          <div
            className={styles.text}
            style={{ animationPlayState: this.state.animation }}
          >
            Jesteśmy firmą w której tradycja i nowoczesność wzajemnie się
            uzupełniają.
            <br /> Nieustannie podążamy za nowymi rozwiązaniami
            technologicznymi, jednocześnie zachowując tradycyjne podejście
            ciesielskie, wykorzystywane w naszych realizacjach.
            <br /> Powierzając nam określone zadanie możecie mieć Państwo
            pewność, że zostanie ono wykonane z należytą dbałością przez
            wysokiej klasy fachowców.
            <br />
            Stale podnosimy kwalifikacje naszych pracowników, którzy swoim
            doświadczeniem, zdobytym na rynkach skandynawskich, francuskim i
            niemieckim, są jednymi z najlepszych w kraju w dziedzinie
            konstrukcji drewnianych.
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
      dispatch({ type: actionsTypes.SAVE_SHORT_ABOUT_TOP, saveTop: top }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortAboutSection);
