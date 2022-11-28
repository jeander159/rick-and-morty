import React from "react";
import {Link} from 'react-router-dom';
import styles from '../css/Card.module.css'
export default function Card({name,species,gender,image,onClose,id}) {
   return (
      <div className={styles.containerCard}>
         <div className={styles.divBlanco}>
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            </Link>
            <button onClick={onClose}>X</button>
            
         </div>
         <div className={styles.divCard}>
            
            <div className={styles.headerCard}>
               <h2 className={styles.titleCard}>{name}</h2>
               <button onClick={onClose}>X</button>
            </div>
            <Link to={`/detail/${id}`}>
               <img  src={image} alt={name} />
            </Link>
            <div className={styles.bodyCard}>
               <h3>{gender}</h3>
               <p>{species}</p>
            </div>
         </div>
      </div>
      
   );
}
