import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {

   const  [characters, setCharacters] = useState("")
   const handleChange = (e)=>{
      const value = e.target.value;
      setCharacters(value);
   }

   return (
      <div className={style.container}>
         <input 
         type='search' 
         placeholder="Buscar un personaje"
         onChange={handleChange}
         />
         <button onClick={()=>{props.onSearch(characters)}}>Agregar</button>
      </div>
   );
}


