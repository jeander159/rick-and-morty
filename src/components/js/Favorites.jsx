import React from 'react';
import { connect,useDispatch } from 'react-redux'
import { orderCards, filterCards } from '../../redux/actions'
import styles from '../css/Cards.module.css';
import stylesFav from '../css/Favorites.module.css';
import Card from './Card';

const Favorites = (props) => {
    // console.log(props)

    // const [order, setOrder] = React.useState("");
    // const [filter, setFilter] = React.useState("Male");

    const dispatch = useDispatch();
    const handleOrderChange = (e)=>{
        // console.log(e.target.value)
        // setOrder(e.target.value)
        dispatch(orderCards(e.target.value))
    }
    
    const handleFilterChange = (e)=>{
        // console.log(e.target.value)
        // setFilter(e.target.value)
        dispatch(filterCards(e.target.value))
    }
    return(<div>
        <div className={stylesFav.divSelects}>
            <select name="order" id="order" onChange={handleOrderChange}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select name="filter" id="filter" onChange={handleFilterChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <div className={styles.divCards}>
            
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
        </div>
    </div>);
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