import React from 'react';
import style from './recipie.module.css'
function Recipie({title,image,ingredients}){

    return (

        <div className={style.recipie}>
        <style>
           @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
        </style>  
         <h1>{title}</h1>
         <img className={style.img} src={image} alt=""></img>
         <h2>ingredients:</h2>
         <ol >
             {
                 ingredients.map(ingredient =>(<li key={Date.now()}>{ingredient.text}</li>))
             }
         </ol>
        </div>
    )
}

export default Recipie