import EscolherCor from "../../components/escolherCor/EscolherCor";
import PainelGame from "../../components/painelGame/PainelGame";
import styles from "./GameLocal.module.css";
import { FaPlay } from "react-icons/fa";
import { GiHorseHead } from "react-icons/gi";
import { GiRollingBomb } from "react-icons/gi";
import { TbReload } from "react-icons/tb";
import { useState } from "react";

function GameLocal() {
  const [gameState, setGameState] = useState({
  started: false,
  turn: "white",

  whiteKnight: null,
  blackKnight: null,

  bombs: [],
  history: [],
  winner: null,
});

  function iniciarPartida() {
  setGameState({
    started: true,
    turn: "white",

    whiteKnight: { x: 2, y: 1 },
    blackKnight: { x: 7, y: 8 },

    bombs: [],
    history: [],
    winner: null,
  });
}

function reiniciarPartida(){
    setGameState({
  started: false,
  turn: "white",

  whiteKnight: null,
  blackKnight: null,

  bombs: [],
  history: [],
  winner: null,
});
}

  return (
    <div className={styles.divMain}>
      <div className={styles.container1}>
        <PainelGame gameState={gameState} />
      </div>
      <div className={styles.container2}>
        <div className={styles.menuEscolha}>
          <span className={styles.title}>
            <h2>
              <GiRollingBomb /> BombHorse <GiHorseHead />
            </h2>
            <p className={styles.sectionTitle}>Partida Local</p>
          </span>

          {!gameState.started ? (
            <div className={styles.sectionEscolhaCor}>
              <p>Escolha sua cor</p>
              <EscolherCor />
              <button
                className={styles.buttonPlay}
                onClick={iniciarPartida}
              >
                {" "}
                <FaPlay />
                INICIAR PARTIDA
              </button>
            </div>
          ) : (
            <div>
              <button
                className={styles.buttonReload}
                onClick={reiniciarPartida}
              >
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
