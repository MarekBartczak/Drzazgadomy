import React, { Component } from "react";
import styles from "./navbar.module.css";
import Hamburger from "../hamburger/hamburger";
import { connect } from "react-redux";
import RightSlide from "../../rightSlide/rightSlide";
import Button from "../../NavBtn/navBtn";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div
          className={styles.name}
          onClick={() => this.scrollTo("home")}
        ></div>
        <Hamburger />
        <RightSlide toggle={!this.props.hamburgerMenu.isClose} />

        <div className={styles.nav}>
          {this.props.btns.map((el, index) => {
            return (
              <div key={index}>
                {" "}
                <Button
                  btnStyle={styles[el.style]}
                  sectionPosition={el.positionName}
                  btnName={el.name}
                  close={() => null}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.phoneMobile}>
          <a href="tel:+48342234345">
            {" "}
            <i className="fas fa-phone-alt"></i>
          </a>
        </div>
        <div className={styles.phone}>
          <a href="tel:+48342234345">+48 342 234 345</a>
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

export default connect(mapStateToProps, null)(Navbar);
