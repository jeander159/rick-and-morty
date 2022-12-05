import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import styles from '../css/Character.module.css'

const Detail = ()=>{

    let {detailId} = useParams();
    const [character,setCharacter] = React.useState([]);

    let navigate = useNavigate();
    const returnHome = ()=>{
        return navigate('/home')
    }
    // const backToHome = ()=>navigate('/');

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);
   
    return(
        <>
            <div className={styles.divCharacter}>
                <div className={styles.characterImage}>
                    <img src={character.image} alt={character.name}/>
                </div>
                <div className={styles.characterContent}>
                    <h2>{character.name}</h2>
                    <p>STATUS: {character.status}</p>
                    <p>SPECIE: {character.species}</p>
                    <p>GENDER: {character.gender}</p>
                </div>
                {/* <h2>{character.origin.name}</h2> */}
            </div>
            <div className={styles.characterButton}>
                <button onClick={returnHome}>RETURN HOME</button>
            </div>
        </>
        
    )
}
export default Detail;