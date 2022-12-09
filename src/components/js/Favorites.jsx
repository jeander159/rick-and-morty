import React from 'react';
import { connect } from 'react-redux'
// import styles from '../css/Favorites.module.css';
import styles from '../css/Cards.module.css';
import Card from './Card';

const Favorites = (props) => {
    console.log(props)
    return<div className={styles.divCards}>
    {
        props.myFavorites && props.myFavorites.map((character,i)=>(
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
// export default Favorites;

const mapStateToProps = (state) =>{
    return{
        myFavorites: state && state.myFavorites
    }
  }
  

  
export default connect(
    mapStateToProps,
    null
)(Favorites);