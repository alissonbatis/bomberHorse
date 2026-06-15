import { FaMoon, FaSun } from "react-icons/fa";
import styles from './TrocarTema.module.css'

import { useTheme } from "../../context/ThemeContext";

function TrocarTema() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.themeButton}>
      {theme === "light" ? (
        <FaMoon />
      ) : (
        <FaSun />
      )}
    </button>
  );
}

export default TrocarTema;