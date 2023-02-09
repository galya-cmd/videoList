import React from "react";
import axios from 'axios';


export default class CardList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    componentDidMount(){
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    method: 'GET',
    headers: {
        'X-API-KEY': '207937a7-e191-4b73-8f08-fc46ea35a35c',
        'Content-Type': 'application/json',
    },
})
        .then(res => res.json())
        .then(json => console.log(json))
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.completed

            });
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    
    }
    
render(){

    const { error, isLoaded, items } = this.state;
    
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        
        <ul>
          {items.map(item => (
            <li key={item.coverUrl}>
              {item.completed.coverUrl} {item.countries.nameRu}
            </li>
          ))}
        </ul>
      );
    }
  }

}