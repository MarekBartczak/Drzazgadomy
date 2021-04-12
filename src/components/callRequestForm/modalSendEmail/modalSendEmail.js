import React, { Component } from "react";
import styles from "./modalSendEmail.module.css";
import { connect } from "react-redux";
import * as actionsTypes from "../../../store/actions/actions";
class SendEmail extends Component {
  ok = () => {
    console.log("ok");
  };
  render() {
    return (
      <div
        className={styles.emailSend}
        style={{ display: this.props.showModalSendEmail ? "block" : "none" }}
      >
        <div className={styles.msg}> Wiadomość została wysłana</div>
        <div
          className={styles.ok}
          onClick={() => this.props.onShowModal(false)}
        >
          OK
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
    onShowModal: (showModal) =>
      dispatch({ type: actionsTypes.SHOW_MODAL_SEND_EMAIL, show: showModal }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SendEmail);
