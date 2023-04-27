import axios from "axios";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const GET_fAVORITES = "GET_fAVORITES"
const URL_BASE = "http://localhost:3001"

/* export const getCharacterDetail = (id) => {
    return function (dispatch) {
      fetch(`${URL_BASE}/detail/${id}`)
      .then(response=>response.json())
      .then((data) => dispatch({ type: GET_CHARACTER_DETAIL, payload: data }))
    };
}; */
export const getCharacterDetail =(id)=>{
  return async function(dispatch){
    const response = await axios.get(`${URL_BASE}/detail/${id}`)
    dispatch({type:GET_CHARACTER_DETAIL,payload:response.data})
  }
}
export const getFavorites = ()=>{
  return async function (dispatch){
    const response = await axios.get(`${URL_BASE}/rickandmorty/fav`)
    dispatch({type:GET_fAVORITES,payload:response.data})
  }
}
  
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const filterCards =(gender)=>{
  return{type:FILTER,payload:gender}
}
export const orderCards =(id)=>{
  return{type:ORDER,payload:id}
}
