import Card from '../card/card';
import styles from './cards.module.css'


export default function Cards({characters,onClose}) {
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
