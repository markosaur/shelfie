import React, {Component} from 'react';
import axios from 'axios'

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form'; 
import Header from './Components/Header/Header';
//import styleSheet
import './App.css';

class App extends Component{
constructor(){
  super()
  this.state={
    inventory: []
  }
} 

componentDidMount = () =>{
  this.getInventory();
  console.log('attempting to mount')
}

  getInventory = () =>{
  axios.get('/api/inventory').then((res)=>{
      this.setState({
        inventory: res.data
      })
      
  })
}

render(){
  return (
    <div>
      <h1>Hello World</h1>
      <Dashboard inventory={this.state.inventory} />
      <Form getInventory={this.getInventory}/>
      <Header/>
    </div>
  );
}
}
export default App;
