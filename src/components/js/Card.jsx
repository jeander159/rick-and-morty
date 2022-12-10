import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addFavorite,delFavorite } from '../../redux/actions';
import styles from '../css/Card.module.css'

function Card(props) {
   
   const [isFav, setIsFav] = React.useState(false);
   
   // console.log(props)
   React.useEffect(() => {
      
      if(props.myFavorites){

         for(let fav of props.myFavorites ){
            if (fav.id === props.id) {
                     setIsFav(true);
                  }
         }
      }
      // props.myFavorites && (
      // props.myFavorites.forEach((fav) => {
      //    if (fav.id === props.id) {
      //       setIsFav(true);
      //    }
      // }))
   }, [props.myFavorites]);
  
   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false)
         props.delFavorite(props.id)
      }else{
         setIsFav(true)
         props.addFavorite(props)
      }
   }
   return (
      
      <div className={styles.containerCard}>
         
         <div className={styles.divCarWhite}>
            {/* {
               isFav ? (<button className={styles.btn} onClick={handleFavorite}>❤️</button>) 
                     : (<button className={styles.btn} onClick={handleFavorite}>🤍</button>)
            }
            <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
            </Link>
            <button onClick={props.onClose}>X</button> */}
             <div className={styles.headerCard}>
               {
                  isFav ? (<button className={styles.btn} onClick={handleFavorite}>❤️</button>) 
                        : (<button className={styles.btn} onClick={handleFavorite}>🤍</button>)
               }
               
               <button onClick={props.onClose}>X</button>
            </div>
            <div className={styles.bodyCardWhite}>
               <h2><Link to={`/detail/${props.id}`}>{props.name}</Link></h2>
               <h3><b>GENDER: </b>{props.gender}</h3>
               <p><b>SPECIES: </b>{props.species}</p>
               <p><b>STATUS: </b>{props.status}</p>
               <Link to={`/detail/${props.id}`}>
                  <img  src={props.image} alt={props.name} />
               </Link>
            </div>
         </div>
         <div className={styles.divCard}>
            
            <div className={styles.headerCard}>
               {
                  isFav ? (<button className={styles.btn} onClick={handleFavorite}>❤️</button>) 
                        : (<button className={styles.btn} onClick={handleFavorite}>🤍</button>)
               }
               <h2 className={styles.titleCard}>{props.id}-{props.name}</h2>
               <button onClick={props.onClose}>X</button>
            </div>
            <Link to={`/detail/${props.id}`}>
               <img  src={props.image} alt={props.name} />
            </Link>
            <div className={styles.bodyCard}>
               <h3>{props.gender}</h3>
               <p>{props.species}</p>
            </div>
         </div>
      </div>
      
   );
}

const mapStateToProps = (state) =>{
  return{
      myFavorites: state && state.myFavorites
  }
}

 const mapDispatchToProps = (dispatch)=>{
   return{
      addFavorite: favorite =>dispatch(addFavorite(favorite)),
      delFavorite: favorite =>dispatch(delFavorite(favorite))
   }
 }

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Card);
