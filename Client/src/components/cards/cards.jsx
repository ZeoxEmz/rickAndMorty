import { useDispatch } from 'react-redux';
import Card from '../card/card';
import styles from './cards.module.css'
import { useEffect } from 'react';
import { getFavorites } from '../../redux/actions';



export default function Cards({characters,onClose}) {
   const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getFavorites())
    },[dispatch])
    
   return (
   <div className={styles.contenedorDiv}>
      {characters.map(({id,name,species,gender,image}) => {
         return <Card 
         key={id}
         id={id}
         name = {name}
         species = {species}
         gender = {gender}
         image = {image}
         onClose = {onClose}
         />
      })}
   </div>
   )
}
