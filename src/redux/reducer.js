import { ADD_FAVORITES, CLEAN_DETAIL, DELETE_FAVORITES, FILTER, GET_CHARACTER_DETAIL, ORDER } from "./actions";

const initialState = {
    myFavorites:[],
    characterDetail:{},
    allCharacters:[],
}

const rooReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_FAVORITES:
            return{...state,myFavorites:[...state.myFavorites,action.payload],allCharacters:[...state.allCharacters,action.payload]}
        case DELETE_FAVORITES: 
            return {...state,myFavorites:state.myFavorites.filter((char)=>char.id !== action.payload)}
        case GET_CHARACTER_DETAIL:
            return{...state,characterDetail:action.payload}
        case CLEAN_DETAIL:
            return{...state,characterDetail:{}}
            case FILTER:
                const gender = action.payload
                const filteredFavorites = state.allCharacters.filter((characters)=>characters.gender === gender)
                return{...state,myFavorites:filteredFavorites}
            case ORDER:
                const order = action.payload
                const sortedFavorites = [...state.allCharacters]
                sortedFavorites.sort((a, b) => {
                if (order === "Ascendente") {return b.id - a.id}
                else {return a.id - b.id}
                })
                return { ...state, myFavorites: sortedFavorites }
            default:
                return{...state}
    }
}
export default rooReducer;