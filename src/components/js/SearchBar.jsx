import React,{useState} from 'react';
import styles from '../css/SearchBar.module.css';
export default function SearchBar(props) {
   // console.log(props)
   // const [character, setCharacter] = useState('')

   // const handleChange = (e) =>{
   //    // console.log(e.target.value)
   //    setCharacter(e.target.value)
   // }
   return (
      <div className={styles.divSearchBar}>
         <button onClick={(() => props.onSearch('random'))}>Random</button>
         <input type='search' name="character"  value={props.character} onChange={props.handleChange}/>
         <button onClick={(() => props.onSearch('search'))}>Agregar</button>
      </div>
   );
}
