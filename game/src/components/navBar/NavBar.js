import styles from "./NavBar.module.css"
import {FaUser} from 'react-icons/fa'
import { FaGear } from "react-icons/fa6";
import Logo from '../../img/LogoPNG.png'


function NavBar (){
    return(
        <div className= {styles.navbar}>
            <div className="logonav">
                <img src={Logo} alt="logopng" />
            </div>
            <div className={styles.divButtons}>
                <button className={styles.perfilButton}>
                    <FaUser/>
                </button>
                <button className={styles.perfilButton}>
                    <FaGear />
                </button>
            </div>
            
        </div>
    )
}

export default NavBar