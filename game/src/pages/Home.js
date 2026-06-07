import styles from "./Home.module.css"
import Tabuleiro from "../components/tabuleiro/Tabuleiro"

function Home (){
    return(
        <div className= {styles.blocoHome}>
            <div>
                <h1>Bem-Vindo ao BombHorse</h1>
                <p>Projeto de um Jogo que funde regras de Xadrez com a dinâminca do BomberMan</p>

                <div className={styles.menu}>
                    <button>
                        Jogar local
                    </button>
                    <button>
                        jogar Online
                    </button>
                </div>

            </div>
            <div>
                <Tabuleiro/>
            </div>
            
        </div>
    )
}

export default Home