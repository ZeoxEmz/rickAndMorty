import About from './components/about/about';
import './App.css';
import { Routes,Route, useNavigate, useLocation } from 'react-router-dom';
import NavBar from './components/navBar/navbar';
import Cards from './components/cards/cards';
import Detail from './components/detail/detail';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Form from './components/form/form';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [access,setAccess] = useState(false)
  const username = "Ezequiel@gmail.com"
  const password = "1password"

  function login (userData){
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }else{
      alert("credenciales incorrectas")
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  


  const [characters,setCharacters] = useState([])


  const onSearch =(id)=>{
    const URL_BASE = "https://rickandmortyapi.com/api"
    const KEY = "af37c84d53aa.bf2aa53c77851613dc66"

    if(characters.find((character)=>character.id == id)) return alert("personaje repetido")
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(Response=>Response.json())
    .then((data)=>{
      if(data.name) setCharacters([...characters,data])
      else alert("algo salio mal")
    })
  }
  const onClose = (id)=>{
    setCharacters(characters.filter(char=>char.id !== id))
  }
  const favoritos = useSelector(state=>state.myFavorites)
 /*  useEffect(()=>{ //cuando se recargue la pagina...
    //quiero que se pidan los usuarios para guardarlos en el estado global
    dispatch(GET_CHARACTERS)
  },[]) */

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/favorites" element={<Cards characters={favoritos} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );  
}

export default App;
