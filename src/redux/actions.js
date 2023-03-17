export const ADD_FAVORITES = "ADD_FAVORITES"
export const DELETE_FAVORITES = "DELETE_FAVORITES"
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

const URL_BASE = "https://rickandmortyapi.com/api"
const KEY = "af37c84d53aa.bf2aa53c77851613dc66"

export const addFavorites=(character)=>{
    return {type:ADD_FAVORITES,payload:character}
}
export const deleteFavorites=(id)=>{
    return{type:DELETE_FAVORITES,payload:id}
}
export const getCharacterDetail = (id) => {
    return function (dispatch) {
      return fetch(`${URL_BASE}/character/${id}?key=${KEY}`).then(response=>response.json())
      .then(
        (data) => dispatch({ type: GET_CHARACTER_DETAIL, payload: data })
      );
    };
  };
  
  export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
  };