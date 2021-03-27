import React, { Component } from "react";
import styles from "./mainSection.module.css";
import { connect } from "react-redux";

import ItemCard from "./ItemCard/itemCard";

class MainSection extends Component {
  render() {
    // console.log(this.props.items[0]);
    return (
      <div className={styles.MainSection}>
        <ItemCard
          ItemCardPictureUrl={this.props.items[0].picUrl}
          ItemCardHeader={this.props.items[0].header}
          ItemCardDescription={this.props.items[0].description}
        />
        <ItemCard
          ItemCardPictureUrl={this.props.items[1].picUrl}
          ItemCardHeader={this.props.items[1].header}
          ItemCardDescription={this.props.items[1].description}
        />
        <ItemCard
          ItemCardPictureUrl={this.props.items[2].picUrl}
          ItemCardHeader={this.props.items[2].header}
          ItemCardDescription={this.props.items[2].description}
        />
        <ItemCard
          ItemCardPictureUrl={this.props.items[3].picUrl}
          ItemCardHeader={this.props.items[3].header}
          ItemCardDescription={this.props.items[3].description}
        />
        <ItemCard
          ItemCardPictureUrl={this.props.items[4].picUrl}
          ItemCardHeader={this.props.items[4].header}
          ItemCardDescription={this.props.items[4].description}
        />
        <ItemCard
          ItemCardPictureUrl={this.props.items[5].picUrl}
          ItemCardHeader={this.props.items[5].header}
          ItemCardDescription={this.props.items[5].description}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, null)(MainSection);
