import React, { useEffect } from 'react';
import { useState } from 'react';
import Main from './main/Main';




function Fech() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(()=> {
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/', {
      method: 'GET',
      headers: {
          'X-API-KEY': '207937a7-e191-4b73-8f08-fc46ea35a35c',
          'Content-Type': 'application/json',
      }
    })

    .then(res => res.json())
    // .then(res => console.log(res))
   
    .then((result)=>{
      setIsLoaded(true);
      setItems(result.items);
    },
   
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
    )

  }, [])

  
  // console.log(items)
  if (error){
    return <div>Error: {error.message}</div>;
  }else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  else {
    return (
      <>
     
      
     <h1>Test</h1>
      
       
        {items?.map(el => 
         (<Main key={el.kinopoiskId} nameRu={el.nameRu} type={el.type} year={el.year} poster={el.posterUrl} ratingKinopoisk={el.ratingKinopoisk} />) 
        
            )}
       
      
     

      
      </>
    );
  }
}



export default React.memo(Fech);