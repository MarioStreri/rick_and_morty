import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   return (
      <div className={style.container}>
         <input type='search' placeholder="Buscar un personaje"/>
         <button onClick={()=>{props.onSearch("agregado")}}>Agregar</button>
      </div>
   );
}
