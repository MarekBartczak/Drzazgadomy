import React, { Component } from "react";
import styles from "./selectedPicture.module.css";
import { connect } from "react-redux";
import * as actionsTypes from "../../../store/actions/actions";
import Aux from "../../../hoc/aux";

// document.getElementsByTagName("body")[0].style = "overflow-y: auto";
// document.getElementsByTagName("body")[0].style = "overflow-y: hidden";

class SelectedPicture extends Component {
  componentDidMount() {
    // console.log(document.body.style.overflowy);
    document.body.style.overflowY = "hidden";
  }

  overflowYAuto = () => {
    document.body.style.overflowY = "";
  };
  render() {
    // let classlist = [styles.background, styles.overflowHidden];
    // let classlist2 = [styles.background, styles.overflowAuto];

    return (
      <Aux>
        <div
          className={styles.background}
          onClick={() => {
            this.props.onShowToggle();
            this.overflowYAuto();
          }}
        ></div>
        <div
          className={styles.close}
          onClick={() => {
            this.props.onShowToggle();
            this.overflowYAuto();
          }}
        >
          Zamknij
        </div>
        <div className={styles.selectedPicture}>
          <div className={styles.pictureHorizontalList}>
            <div className={styles.container}>
              {this.props.gallery.map((el, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      this.props.onSelectedPictureUrl(el.url);
                    }}
                    className={styles.pictureHorizontalListEl}
                    style={{ backgroundImage: `url(${el.url})` }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div
            className={styles.pic}
            onClick={() => {
              this.props.onShowToggle();
              this.overflowYAuto();
            }}
            style={{
              backgroundImage: `url(${this.props.selectedPicture.url})`,
            }}
          >
            {" "}
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
    onShowToggle: () => dispatch({ type: actionsTypes.SHOW_GALLERY_PIC }),
    onSelectedPictureUrl: (selectedUrl) =>
      dispatch({ type: actionsTypes.SELECTED_PICTURE_URL, url: selectedUrl }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectedPicture);
