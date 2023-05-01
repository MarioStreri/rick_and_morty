//import styles from "./Detail.module.css"
import { useState , useEffect } from "react";
import { Link, useParams } from "react-router-dom"

export default function Detail(props){
    
    const {detailId} = useParams();
    const [character , setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
    }, [detailId]);
    
    return(
        <div >
            <Link to='/home'>
                <button>Go Back</button>
            </Link>
            <h1>DETAIL</h1>
            <h2>NAME:{character.name}</h2>
            <h2>STATUS:{character.status}</h2>
            <h2>GENERO:{character.gender}</h2>
            {character.origin && <h2>ORIGIN:{character.origin.name}</h2>}
            <img src={character.image} alt={character.name}/>
        </div>
    ) 
}
