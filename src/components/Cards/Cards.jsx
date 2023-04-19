import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const {characters} = props;

   return (
      <div className= {style.container}>
         {
            characters.map(({id,name,species,gender,image})=>{
               return <Card
                  key = {id}
                  name = {name}
                  species = {species}
                  gender= {gender}
                  image = {image}
                  onClose = {() => window.alert('Emulamos que se cierra la card')} 
               />
            })
            
         }
         
      </div>
      
   )
}
