import React from 'react';
import Card from './Card';
import styles from '../css/Cards.module.css';

export default function Cards(props) {
   // console.log(props)
   const { characters } = props;
   return <div className={styles.divCards}>
      {
         characters.map((character,i)=>(
            <Card key={i} 
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={() => props.onClose(character.id)}
                  id={character.id}
            />
         ))
      }
   </div>;
}
