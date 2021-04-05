import React, { Component } from "react";
import styles from "./gallery.module.css";
// import pictures from "../../../assets/headerBackground";
import Aux from "../../../hoc/aux";

class Gallery extends Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <Aux>
        <div className={styles.gallery}>some pictures</div>
        {/* {pictures.map(({ id, src, title, description }) => (
          <img key={id} src={src} title={title} alt={description} />
        ))} */}
      </Aux>
    );
  }
}

export default Gallery;
