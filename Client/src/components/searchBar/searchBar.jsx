import { useState } from "react"
import styles from "./searchBar.module.css"


export default function SearchBar({onSearch}) {

    const[id,setId] = useState("")
 
    const handleChange = (event)=>{
      setId(event.target.value)
    }

    return (
       <div className={styles.div}>
          <input className={styles.input} type='search' onChange={handleChange}/>
          <button className={styles.boton} onClick={()=>onSearch(id)}>Agregar</button>
       </div>
    );
}