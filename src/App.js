import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list';
import {SearchBox} from './components/searchBox/SearchBox'

class App extends Component {
  constructor(){
    super();
    this.state ={
      monster:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster:users}) );
 
  }

  handlerChange =(e) =>{
    this.setState({searchField: e.target.value})
  }
  render() {
    const {monster, searchField} = this.state;
    const filteredMonsters = monster.filter(monsters=>
    monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
  
    return (
      <div className="App"> 
        <h1 className="h1">Monsters Website App</h1>
        <SearchBox
         placeholder='search monesters' 
         eventHandler={this.handlerChange}
         />
        <CardList monsters={filteredMonsters}/>

    </div>
    )
  }
}

export default App;
