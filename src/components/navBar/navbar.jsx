import SearchBar from "../searchBar/searchBar";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css"

const NavBar = ({onSearch})=>{
    return(
        <div className={styles.container}>
            <div className={styles.divLinks}>
            <Link className={styles.link} to="/about">ABOUT</Link>
            <Link className={styles.link} to="/home">HOME</Link>
            <Link className={styles.link} to="/favorites">FAVORITES</Link>
            </div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default NavBar;