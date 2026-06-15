import EscolherCor from "../../components/escolherCor/EscolherCor";
import PainelGame from "../../components/painelGame/PainelGame";
import styles from "./GameLocal.module.css";
import { FaPlay } from "react-icons/fa";
import { GiHorseHead } from "react-icons/gi";
import { GiRollingBomb } from "react-icons/gi";
import { TbReload } from "react-icons/tb";
import { useState } from "react";

function GameLocal() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className={styles.divMain}>
      <div className={styles.container1}>
        <PainelGame />
      </div>
      <div className={styles.container2}>
        <div className={styles.menuEscolha}>
          <span className={styles.title}>
            <h2>
              <GiRollingBomb /> BombHorse <GiHorseHead />
            </h2>
            <p className={styles.sectionTitle}>Partida Local</p>
          </span>

          {!gameStarted ? (
            <div className={styles.sectionEscolhaCor}>
              <p>Escolha sua cor</p>
              <EscolherCor />
              <button
                className={styles.buttonPlay}
                onClick={() => setGameStarted(true)}
              >
                {" "}
                <FaPlay />
                INICIAR PARTIDA
              </button>
            </div>
          ) : (
            <div>
              <button className={styles.buttonReload} onClick={() => setGameStarted(false)} >
                {" "}
                <TbReload size={30} />
                REINICIAR PARTIDA
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameLocal;
