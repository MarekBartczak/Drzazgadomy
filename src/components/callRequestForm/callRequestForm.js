import React, { Component } from "react";
import styles from "./callRequestForm.module.css";
import * as emailjs from "emailjs-com";
import SendEmail from "./modalSendEmail/modalSendEmail";
import Aux from "../../hoc/aux";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/actions";

class CallRequestForm extends Component {
  state = {
    name: "",
    phone: "",
    contactTime: "",
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  sendEmail = () => {
    let templateParams = {
      from_name: this.state.name,
      to_name: "marek.bartczak@gmail.com",
      subject: "Nowa wiadomosc",
      contact_time: this.state.contactTime,
      phone_number_client: this.state.phone,
    };

    emailjs
      .send(
        "service_y6p8h4i",
        "template_ttzid8a",
        templateParams,
        "user_8M89hEsl6TJjpKWX3rQDS"
      )
      .then(() => this.props.onShowModal(true));
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: "",
      phone: "",
      contactTime: "",
    });
  };

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <Aux>
        <SendEmail show={this.state.showModalSendEmail} />
        <div className={styles.callRequestForm}>
          <div className={styles.title}>Możemy do Ciebie zadzwonić </div>
          <div className={styles.textInfo}>
            Zostaw swoje imię, oraz numer telefonu. <br />
            Odezwiemy się najszybciej jak tylko będziemy mogli
          </div>

          <div className={styles.form}>
            <input
              value={this.state.name}
              name="text"
              onChange={this.handleChange.bind(this, "name")}
              type="text"
              className={styles.callRequestName}
              placeholder={"Imię"}
            ></input>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={this.state.phone}
              name="phone"
              onChange={this.handleChange.bind(this, "phone")}
              className={styles.callRequestPhone}
              placeholder={"Nr telefonu"}
            ></input>
            <select
              className={styles.callRequestTime}
              value={this.state.contactTime}
              name="contactTime"
              onChange={this.handleChange.bind(this, "contactTime")}
            >
              <option value="" selected disabled hidden>
                pora kontaktu
              </option>
              <option>O każdej porze</option>
              <option>Rano</option>
              <option>Południe</option>
              <option>Wieczór</option>
            </select>
            <button className={styles.callRequestBtn} onClick={this.sendEmail}>
              Proszę o kontakt
            </button>
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
    onShowModal: (showModal) =>
      dispatch({ type: actionsTypes.SHOW_MODAL_SEND_EMAIL, show: showModal }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CallRequestForm);
