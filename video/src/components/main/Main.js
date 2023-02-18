import React from "react";

import './style.css'


function Main(props){
    return (
        <>
        <div className="main__container">
            <div>
            <img src={props.poster} alt="poster"/>
            </div>
            
            <div className={props.name}></div>
            <div className={props.year}></div>
            <div className={props.type}></div>
        </div>
        </>
    )
}

export default Main