import { useState } from "react";
import styles from "./EscolherCor.module.css";

function EscolherCor() {
  const [cor, setCor] = useState("white");

  return (
    <div className={styles.colorSelector}>
      <div
        className={`${styles.option} ${
          cor === "white" ? styles.selected : ""
        }`}
        onClick={() => setCor("white")}
      >
        <div className={styles.radio}>
          {cor === "white" && <div className={styles.radioDot}></div>}
        </div>

        <div className={styles.pieceWhite}></div>

        <span>Branco</span>
      </div>

      <div
        className={`${styles.option} ${
          cor === "black" ? styles.selected : ""
        }`}
        onClick={() => setCor("black")}
      >
        <div className={styles.radio}>
          {cor === "black" && <div className={styles.radioDot}></div>}
        </div>

        <div className={styles.pieceBlack}></div>

        <span>Preto</span>
      </div>
    </div>
  );
}

export default EscolherCor;