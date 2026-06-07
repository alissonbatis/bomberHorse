import styles from "./Tabuleiro.module.css";

function Tabuleiro() {
  const casas = [];

  for (let y = 1; y <= 8; y++) {
    for (let x = 1; x <= 8; x++) {
      const preta = (x + y) % 2 === 1;

      casas.push(
        <div
          key={`${x}-${y}`}
          className={preta ? styles.casaPreta : styles.casa}
          data-x={x}
          data-y={y}
        />,
      );
    }
  }

  return <div className={styles.tabuleiro}>{casas}</div>;
}

export default Tabuleiro;
