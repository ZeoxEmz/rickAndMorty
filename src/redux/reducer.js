import { ADD_FAVORITES, CLEAN_DETAIL, DELETE_FAVORITES, GET_CHARACTER_DETAIL } from "./actions";

const initialState = {
    myFavorites:[],
    characterDetail:{},
}

const rooReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_FAVORITES:
            return{...state,myFavorites:[...state.myFavorites,action.payload]}
        case DELETE_FAVORITES: 
            return {...state,myFavorites:state.myFavorites.filter((char)=>char.id !== action.payload)}
        case GET_CHARACTER_DETAIL:
            return{...state,characterDetail:action.payload}
        case CLEAN_DETAIL:
            return{...state,characterDetail:{}}
        default:
            return{...state}
    }
}
export default rooReducer;