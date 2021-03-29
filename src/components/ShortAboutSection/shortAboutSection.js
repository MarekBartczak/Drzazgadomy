import React, { Component } from "react";
import styles from "./shortAboutSection.module.css";
import Aux from "../../hoc/aux";

class ShortAboutSection extends Component {
  render() {
    return (
      <Aux>
        <div className={styles.shortAboutSection}>
          <div className={styles.about}>
            <p>
              Oferowane domki drewniane wykonujemy z balika świerkowego lub
              sosnowego (145/45 mm) w technologii węgłowej, tzn z wycięciem w
              narożnikach, pozwalającym na zazębienie się kolejnych warstw ścian
              tworząc zwartą i mocną konstrukcję. Używamy drewna suszonego
              komorowo, o odpowiedniej wilgotności, impregnowanego. Podstawą w
              naszej firmie jest jakość i dbałość o szczegóły, dlatego
              zatrudniamy doświadczoną kadrę pracowniczą, a materiały
              wykorzystywane do produkcji naszych domków są najwyższej jakości,
              pozyskiwane z legalnych źródeł.
              <br />
              <br />
              Jesteśmy producentem, dlatego możemy się dostosować do
              indywidualnych preferencji klienta. Kompleksowo produkujemy i
              montujemy, zarówno dla klientów indywidualnych i firm, jesteśmy w
              stanie kompleksowo wyposażyć każdy ośrodek wczasowy. Wykonujemy
              zamówienia na terenie całej Polski oraz za granicą
            </p>
          </div>
          <div className={styles.btns}>
            <button className={styles.ourProjects}>Nasze Projekty</button>
            {/* <button className={styles.aboutUs}>O Firmie</button> */}
          </div>
        </div>
      </Aux>
    );
  }
}

export default ShortAboutSection;
