import Tabuleiro from "../tabuleiro/Tabuleiro";
import styles from "./PainelGame.module.css";
import "../../index.css";

function PainelGame({gameState}) {
  return (
    <div>
      <Tabuleiro gameState={gameState}/>
      <div className={styles.turnContainer}>
        <div className={styles.player}>
          <div className={styles.playerInfo}>
            <div className={styles.playerIcon}></div>

            <div>
              <h3>Você</h3>
              <p>⏱ 10:00</p>
            </div>
          </div>
        </div>

        <div className={styles.turnIndicator}>Sua vez</div>

        <div className={styles.player}>
          <div className={styles.playerInfo}>
            <div className={styles.opponentIcon}></div>

            <div>
              <h3>Oponente</h3>
              <p>⏱ 10:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainelGame;
