import styles from "./Tabuleiro.module.css";
import { GiHorseHead } from "react-icons/gi";

function Tabuleiro({ gameState = {} }) {
  const casas = [];

  for (let y = 8; y >= 1; y--) {
    for (let x = 1; x <= 8; x++) {
      const preta = (x + y) % 2 === 0;

      const isWhiteKnight =
        gameState.started &&
        gameState.whiteKnight &&
        gameState.whiteKnight.x === x &&
        gameState.whiteKnight.y === y;

      const isBlackKnight =
        gameState.started &&
        gameState.blackKnight &&
        gameState.blackKnight.x === x &&
        gameState.blackKnight.y === y;

      const hasBomb =
  gameState?.bombs?.some(
    (bomb) => bomb.x === x && bomb.y === y
  );

      casas.push(
        <div
          key={`${x}-${y}`}
          className={preta ? styles.casaPreta : styles.casa}
          data-x={x}
          data-y={y}
        >
          {hasBomb && (
            <span className={styles.bomba}>
              💣
            </span>
          )}

          {isWhiteKnight && (
            <GiHorseHead
              className={styles.whiteKnight}
            />
          )}

          {isBlackKnight && (
            <GiHorseHead
              className={styles.blackKnight}
            />
          )}
        </div>
      );
    }
  }

  const letras = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.boardContainer}>

        <div className={styles.numeros}>
          {[8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
            <span key={num}>{num}</span>
          ))}
        </div>

        <div>
          <div className={styles.tabuleiro}>
            {casas}
          </div>

          <div className={styles.letras}>
            {letras.map((letra) => (
              <span key={letra}>{letra}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Tabuleiro;