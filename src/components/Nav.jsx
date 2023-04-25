import SearchBar from "./SearchBar/SearchBar";

export default function nav(props){
    return(
        <div >
            <SearchBar onSearch={props.onSearch}/>
        </div>
    ) 
}

