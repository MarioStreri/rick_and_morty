import style from "./Card.module.css"

export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className={style.container}>
         <div className= {style.buttonContainer}>
            <button onClick={onClose}>X</button>
         </div>
         <div className= {style.dataContainer}>
            <h2>{name}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         <img className= {style.image} src={image} alt={name}/>
      </div>
   );
}
