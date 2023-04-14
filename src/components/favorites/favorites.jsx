import { useDispatch, useSelector } from "react-redux"
import Card from "../card/card"
import { filterCards, orderCards } from "../../redux/actions"
import styles from "./favorites.module.css"
const Favorites =()=>{

    const dispatch = useDispatch()
    const favorites = useSelector(state=>state.myFavorites) //uso useSelector para importar del estado favorites
    const order =(event)=>{
        const order = event.target.value
        dispatch(orderCards(order))
    }
    const filter =(event)=>{
        const gender = event.target.value
        dispatch(filterCards(gender))
    }
    return(
        <div >
            <div>
              <select onChange={order} name="order" id="order">
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
              </select>
        
              <select onChange={filter} name="filter" id="filter">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
              </select>
            </div>
            <div className={styles.div}>
            {favorites.map(({ id, name, species, gender, image }, key) => {
              return (
             <Card
              key={key}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              />);
              })}
            </div>
        
      </div>
    )
}

export default Favorites