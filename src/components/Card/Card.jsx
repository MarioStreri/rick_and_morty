import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.container}>
         <div className= {style.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>
         <div className= {style.dataContainer}>
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         <img className= {style.image} src={props.image} alt={props.name}/>
      </div>
   );
}
