import React, { useEffect } from 'react';
import { useState } from 'react';




function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/', {
      method: 'GET',
      headers: {
          'X-API-KEY': '207937a7-e191-4b73-8f08-fc46ea35a35c',
          'Content-Type': 'application/json',
      }
    })

    .then(res => res.json())
     .then(json => console.log(json))
    .then((result)=>{
      setIsLoaded(true);
      setItems(result);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
    )

  }, [])

  if (error){
    return <div>Error: {error.message}</div>;
  }else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  else {
    return (
      <ul>
        {
            Array.isArray(items)? items.map(item =>{
                <li key={item.id}>
                    {item.nameRu}
                </li>
            }) : null
        }
      </ul>
    );
  }
}

export default MyComponent;