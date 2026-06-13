import styles from "./Home.module.css"
import '../index.css';
import Footer from "../components/footer/Footer";
import {
  Play,
  User,
  Trophy,
  Palette,
  Users
} from "lucide-react";
import PainelGame from "../components/painelGame/PainelGame";

function Home (){
    return(
        <div className= {styles.blocoHome}>
            <div className= {styles.container}>
                <div>
                    <h1>Bem-Vindo ao <span className={styles.logoText}>BombHorse</span></h1>
                    <p>Projeto de um Jogo que funde regras de Xadrez com a dinâminca do BomberMan</p>

                    <div className={styles.menu}>
                        <button className={styles.primaryButton}>
                            <span>
                                <Play/>
                            </span>
                            Jogar Agora
                        </button>
                        <button className={styles.secondaryButton}>
                            <span className={styles.icRx}><User/></span>
                            Jogar Local
                        </button>
                        <button className={styles.secondaryButton}>
                            <span className={styles.icRx}><Trophy/></span>
                            Ranking
                        </button>
                        <button className={styles.secondaryButton}>
                            <span className={styles.icRx}><Palette/></span>
                            Temas
                        </button>
                        <button className={styles.secondaryButton}>
                            <span className={styles.icRx}><Users/></span>
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