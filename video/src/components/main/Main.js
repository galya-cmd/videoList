import React from "react";

import './style.css'


function Main({poster,nameRu,year,type,ratingKinopoisk,
}){
    return (
        <>
        <div className="main__container">
            <div className="main__img">
            <img src={poster} alt="poster"/>            
            </div>
            
            <div className="main__information">
            <p>{nameRu}</p>
            <p>{year}</p>
            <p>{type}</p>
            <p>rating:{ratingKinopoisk}</p>
            {/* <video src={posterUrlPreview} /> */}
            </div>
            
            
        </div>
        </>
    )
}

export default Main;