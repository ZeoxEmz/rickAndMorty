import { CLEAN_DETAIL, FILTER, GET_CHARACTER_DETAIL, GET_fAVORITES, ORDER } from "./actions";

const initialState = {
    myFavorites:[],
    characterDetail:{},
    allCharacters:[],
}

const rooReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_fAVORITES:
            return{...state,myFavorites:action.payload,allCharacters:action.payload}
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