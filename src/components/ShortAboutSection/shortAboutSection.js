import React, { Component } from "react";
import styles from "./shortAboutSection.module.css";
import Aux from "../../hoc/aux";

class ShortAboutSection extends Component {
  render() {
    return (
      <Aux>
        <div className={styles.shortAboutSection}>
          <div className={styles.about}>
            <div className={styles.aboutLineOne}>
              <div className={styles.aboutText}>
                Nasze domki drewniane wykonujemy z balika świerkowego lub
                sosnowego (145/45 mm) w technologii węgłowej, tzn z wycięciem w
                narożnikach, pozwalającym na zazębienie się kolejnych warstw
                ścian tworząc zwartą i mocną konstrukcję. Używamy drewna
                suszonego komorowo, o odpowiedniej wilgotności, impregnowanego.
              </div>
              <div className={styles.imgOne}></div>
            </div>
            <div className={styles.aboutLineTwo}>
              <div className={styles.imgTwo}></div>
              <div className={styles.aboutText}>
                Podstawą w naszej firmie jest jakość i dbałość o szczegóły,
                dlatego zatrudniamy doświadczoną kadrę pracowniczą, a materiały
                wykorzystywane do produkcji naszych domków są najwyższej
                jakości, pozysknjuy n m iwane z legalnych źródeł.
              </div>
            </div>
            <div className={styles.aboutLineThree}>
              <div className={styles.aboutText}>
                Jesteśmy producentem, dlatego możemy się dostosować do
                indywidualnych preferencji klienta. Kompleksowo produkujemy i
                montujemy, zarówno dla klientów indywidualnych i firm, jesteśmy
                w stanie kompleksowo wyposażyć każdy ośrodek wczasowy.
                Wykonujemy zamówienia na terenie całej Polski oraz za granicą
              </div>
              <div className={styles.imgThree}></div>
            </div>
          </div>
          <div className={styles.btns}>
            <button className={styles.ourProjects}>Nasze Projekty</button>
          </div>
        </div>
      </Aux>
    );
  }
}

export default ShortAboutSection;
