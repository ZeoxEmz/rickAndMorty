import About from './components/about/about';
import './App.css';
import { Routes,Route, useNavigate, useLocation } from 'react-router-dom';
import NavBar from './components/navBar/navbar';
import Cards from './components/cards/cards';
import Detail from './components/detail/detail';
import { useEffect, useState } from 'react';
import Form from './components/form/form';
import Favorites from './components/favorites/favorites';
import axios from "axios"

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [access,setAccess] = useState(false)
  const [characters,setCharacters] = useState([])
  const URL_BASE = "http://localhost:3001"

  function login ({username,password}){
    axios.get(`${URL_BASE}/login?password=${password}&email=${username}`)
    .then(response=> {
      if(response.data.access === true) {
        setAccess(true)
        navigate("/home")
      }else alert("credenciales incorrectas")
    })
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);



  const onSearch =(id)=>{
    if(characters.find((character)=>character.id === Number(id))) return alert("personaje repetido")
    fetch(`${URL_BASE}/onsearch/${id}`)
    .then(Response=>Response.json())
    .then((data)=>{
      if(data.name) setCharacters([...characters,data])
      else alert("algo salio mal")
    })
  }
  const onClose = (id)=>{
    setCharacters(characters.filter(char=>char.id !== id))
  }

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );  
}

export default App;
