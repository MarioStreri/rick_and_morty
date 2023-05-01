import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";


export default function nav(props){
    return(
        <div >
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    ) 
}

