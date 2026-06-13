import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import '../../index.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.mnfooter}>
        <ul>
          <li>
            ©2026 BombHorse.
          </li>
          <li>
            |
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/idioma">Idioma</Link>
          </li>
          <li>
            <Link to="/devs">Desenvolvedores</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
