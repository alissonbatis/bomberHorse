import styles from "./NavBar.module.css"
import Logo from '../../img/LogoPNG.png'
import {
  Settings,
  User
} from "lucide-react";

import TrocarTema from '../trocarTema/TrocarTema'

function NavBar (){
    return(
        <div className= {styles.navbar}>
            <div className="logonav">
                <img src={Logo} alt="logopng" />
            </div>
            <div className={styles.divButtons}>
                <button className={styles.perfilButton}>
                    <User/>
                </button>
                <button className={styles.perfilButton}>
                    <Settings />
                </button>
                <div>
                    <TrocarTema/>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar