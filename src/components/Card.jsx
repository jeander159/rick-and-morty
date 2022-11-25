import React from "react";
import styles from './Card.module.css'
export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className={styles.divCard}>
         <div className={styles.headerCard}>
            <h2 className={styles.titleCard}>{name}</h2>
            <button onClick={onClose}>X</button>
         </div>
         <img  src={image} alt={name} />
         <div className={styles.bodyCard}>
            <h3>{gender}</h3>
            <p>{species}</p>
         </div>
      </div>
   );
}
