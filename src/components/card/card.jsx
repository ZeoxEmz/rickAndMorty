import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";/* 
import Detail from "../detail/detail"; */
import { addFavorites, deleteFavorites } from "../../redux/actions";
import styles from "./card.module.css"

const Card =({id,name,species,gender,image,onClose})=>{
    const dispatch = useDispatch();
    const myFavorites = useSelector(state=>state.myFavorites)
    const [isFav,setIsFav] = useState(false)
    const handleFavorite =()=>{
        if(isFav){
           setIsFav(false)
           dispatch(deleteFavorites(id))
        }
        else {
           setIsFav(true)
           dispatch(addFavorites(
              {
                 id,
                 name,
                 species,
                 gender,
                 image,
                 onClose,
                 addFavorites,
                 deleteFavorites,
              }))
        }
     }
     useEffect(() => {
        myFavorites.forEach((fav) => {
           if (fav.id === id) {
              setIsFav(true);
           }
        });
     }, [id,myFavorites]);

     return (
      <div className={styles.contenedor}>
         <div className={styles.divBoton}>
         {isFav ? (<button className={styles.boton} onClick={handleFavorite}>❤️</button>) 
         : (<button className={styles.boton} onClick={handleFavorite}>🤍</button>)}
         <button className={styles.botonX} onClick={()=>onClose(id)}>X</button>
         </div>
         <img className={styles.img} src={image} alt="" />
         <Link to={`/detail/${id}`}><h2 className={styles.titulo}>name: {name}</h2></Link>

         <h2 className={styles.subTitulo}>species: {species}</h2>
         <h2 className={styles.subTitulo}>gender: {gender}</h2>
      </div>
   );
}

export default Card;