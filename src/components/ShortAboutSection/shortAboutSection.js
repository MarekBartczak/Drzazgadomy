import React, { Component } from "react";
import styles from "./shortAboutSection.module.css";
import Aux from "../../hoc/aux";

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
    // console.log(this.whereElementRef.offsetHeight);
  }

  render() {
    // console.log(this.state.animation);
    return (
      <Aux>
        <div
          className={styles.shortAboutSection}
          ref={(n) => {
            this.whereElementRef = n;
          }}
        >
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
        </div>
      </Aux>
    );
  }
}

export default ShortAboutSection;

/* <div className={styles.aboutText}>
    Nasze domki drewniane wykonujemy z balika świerkowego lub
                sosnowego (145/45 mm) w technologii węgłowej, tzn z wycięciem w
                narożnikach, pozwalającym na zazębienie się kolejnych warstw
                ścian tworząc zwartą i mocną konstrukcję.
<br />
<br />
<br />
<br />
a materiały
                wykorzystywane do produkcji naszych domków są najwyższej
                jakości, pozyskiwane z legalnych źródeł.
<br />
<br />
Jesteśmy producentem, dlatego możemy się dostosować do
indywidualnych preferencji klienta.
<br />
<br />

<br />
<br />
Jesteśmy w stanie kompleksowo wyposażyć każdy ośrodek wczasowy.
<br />
<br />
</div> */
