import React, { Component } from "react";
import styles from "./mainSection.module.css";
import { connect } from "react-redux";
import Aux from "../../../hoc/aux";
import * as actionsTypes from "../../../store/actions/actions";
import ItemCard from "../ItemCard/itemCard";

class MainSection extends Component {
  state = {
    animation: "paused",
    animation1: "paused",
    animation2: "paused",
    animation3: "paused",
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      // console.log(
      //   document.documentElement.scrollHeight -
      //     document.documentElement.scrollTop
      // );
      let scroll = document.documentElement.scrollTop;
      // console.log(scroll);
      if (scroll > 900) {
        this.setState({ animation: "running" });
      }
      if (scroll > 1800) {
        this.setState({ animation1: "running" });
      }
      if (scroll > 2600) {
        this.setState({ animation2: "running" });
      }
      if (scroll > 3400) {
        this.setState({ animation3: "running" });
      }
    });
    this.props.onSaveoffsetTop(this.offerRef.offsetTop + 100);
  }

  render() {
    return (
      <Aux>
        <div className={styles.offerTitle} ref={(e) => (this.offerRef = e)}>
          Oferta
        </div>
        <div className={styles.MainSection}>
          <ItemCard
            ref={(el) => (this.showEl = el)}
            animation={this.state.animation}
            number={this.props.items[0].number}
            ItemCardPictureUrl={this.props.items[0].picUrl}
            ItemCardHeader={this.props.items[0].header}
            size={this.props.items[0].description.size}
            price={this.props.items[0].description.price}
            include={this.props.items[0].description.include}
            side1={this.props.items[0].side1Url}
            side2={this.props.items[0].side2Url}
          />
          <ItemCard
            animation={this.state.animation1}
            number={this.props.items[1].number}
            ItemCardPictureUrl={this.props.items[1].picUrl}
            ItemCardHeader={this.props.items[1].header}
            size={this.props.items[1].description.size}
            price={this.props.items[1].description.price}
            include={this.props.items[1].description.include}
            side1={this.props.items[1].side1Url}
            side2={this.props.items[1].side2Url}
          />

          <ItemCard
            animation={this.state.animation2}
            number={this.props.items[2].number}
            ItemCardPictureUrl={this.props.items[2].picUrl}
            ItemCardHeader={this.props.items[2].header}
            size={this.props.items[2].description.size}
            price={this.props.items[2].description.price}
            include={this.props.items[2].description.include}
            side1={this.props.items[2].side1Url}
            side2={this.props.items[2].side2Url}
          />
          <ItemCard
            animation={this.state.animation3}
            number={this.props.items[3].number}
            ItemCardPictureUrl={this.props.items[3].picUrl}
            ItemCardHeader={this.props.items[3].header}
            size={this.props.items[3].description.size}
            price={this.props.items[3].description.price}
            include={this.props.items[3].description.include}
            side1={this.props.items[3].side1Url}
            side2={this.props.items[3].side2Url}
          />
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
      dispatch({ type: actionsTypes.SAVE_OFFER_TOP, saveTop: top }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
