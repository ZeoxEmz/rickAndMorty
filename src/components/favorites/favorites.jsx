import { useSelector } from "react-redux"
import Card from "../card/card"
const Favorites =()=>{

    const favorites = useSelector(state=>state.myFavorites) //uso useSelector para importar del estado favorites
    return(
        <div>
            {
                favorites.map(({id,name,species,gender,image})=>{
                    return (<Card
                        key={id}
                        id={id}
                        name = {name}
                        species = {species}
                        gender = {gender}
                        image = {image}
                        />)
                })
            }
        </div>
    )
}

export default Favorites