import styles from "./Home.module.css"
import '../index.css';
import Footer from "../components/footer/Footer";
import {
  FaPlay,
  FaUsers,
  FaTrophy,
  FaPalette,
  FaUserFriends
} from "react-icons/fa";
import PainelGame from "../components/painelGame/PainelGame";

function Home (){
    return(
        <div className= {styles.blocoHome}>
            <div className= {styles.container}>
                <div>
                    <h1>Bem-Vindo ao BombHorse</h1>
                    <p>Projeto de um Jogo que funde regras de Xadrez com a dinâminca do BomberMan</p>

                    <div className={styles.menu}>
                        <button className={styles.primaryButton}>
                            <FaPlay/>
                            Jogar Agora
                        </button>
                        <button className={styles.secondaryButton}>
                            <FaUsers/>
                            Jogar Local
                        </button>
                        <button className={styles.secondaryButton}>
                            <FaTrophy/>
                            Ranking
                        </button>
                        <button className={styles.secondaryButton}>
                            <FaPalette/>
                            Temas
                        </button>
                        <button className={styles.secondaryButton}>
                            <FaUserFriends/>
                            Amigos
                        </button>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>

            </div>
            <div className={styles.container2}>
                <PainelGame/>
            </div>
            
        </div>
    )
}

export default Home