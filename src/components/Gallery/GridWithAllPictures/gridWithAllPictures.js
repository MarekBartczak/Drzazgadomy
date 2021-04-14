import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../../hoc/aux";
import styles from "./gridWithAllPictures.module.css";
import SelectedPicture from "../SelectedPicture/selectedPicture";
import * as actionsTypes from "../../../store/actions/actions";

class GridWithAllPictures extends Component {
  state = {
    selected: null,
  };

  render() {
    return (
      <Aux>
        {this.props.showSelectedPictureFromGallery ? (
          <SelectedPicture selected={this.state.selected} />
        ) : null}
        <div className={styles.gridWithAllPictures}>
          {this.props.gallery.map((el, index) => {
            return (
              <div
                key={index}
                className={styles.pic}
                onClick={() => {
                  this.props.onShowToggle();
                  this.props.onSelectedPictureUrl(el.url);
                  // this.setState({ selected: el.url });
                }}
                style={{ backgroundImage: `url(${el.url})` }}
              ></div>
            );
          })}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridWithAllPictures);
