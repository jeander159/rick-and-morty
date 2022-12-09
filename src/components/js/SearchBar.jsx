import React,{useState} from 'react';
import styles from '../css/SearchBar.module.css';
import {NavLink} from 'react-router-dom';
export default function SearchBar(props) {
   // console.log(props)
   // const [character, setCharacter] = useState('')

   // const handleChange = (e) =>{
   //    // console.log(e.target.value)
   //    setCharacter(e.target.value)
   // }
   
   return (
      <div className={styles.divSearchBar}>
         <NavLink to='/home' style={({ isActive }) => isActive ? { color: "#E9C962" ,borderTop:'1px solid #E9C962'} : null }>
            HOME
         </NavLink>
         
         <div className={styles.divInputs}>
            <button onClick={(() => props.onSearch('random'))}>Random</button>
            <input type='search' name="character"  value={props.character} onChange={props.handleChange}/>
            <button onClick={(() => props.onSearch('search'))}>Agregar</button>
         </div>
         <NavLink to='/favorites' style={({ isActive }) => isActive ? { color: "#E9C962",borderTop:'1px solid #E9C962' } : null }>
            FAVORITES
         </NavLink>
         <NavLink to='/about' style={({ isActive }) => isActive ? { color: "#E9C962",borderTop:'1px solid #E9C962' } : null }>
            ABOUT
         </NavLink>
         {/* <NavLink to='/' style={({ isActive }) => isActive ? { color: "#E9C962",borderTop:'1px solid #E9C962' } : null }>
            LOGOUT
         </NavLink> */}
         <NavLink to='/' onClick={props.logout}>
            Logout
         </NavLink>
      </div>
   );
}
