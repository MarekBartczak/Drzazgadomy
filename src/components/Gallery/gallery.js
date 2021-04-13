import React, { Component } from "react";
import styles from "./gallery.module.css";
import Aux from "../../hoc/aux";
import { connect } from "react-redux";
// import SelectedPicture from "./SelectedPicture/selectedPicture";
import GridWithAllPictures from "./GridWithAllPictures/gridWithAllPictures";
import * as actionsTypes from "../../store/actions/actions";

class Gallery extends Component {
  componentDidMount() {
    this.props.onSaveoffsetTop(this.showEl.offsetTop + 100);
  }
  render() {
    return (
      <Aux>
        <div className={styles.title} ref={(el) => (this.showEl = el)}>
          Galeria
        </div>
        <div className={styles.gallery}>
          <GridWithAllPictures />
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
      dispatch({ type: actionsTypes.SAVE_GALLERY_TOP, saveTop: top }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
