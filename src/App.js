import React from 'react';

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form'; 
import Header from './Components/Header/Header';

//import styleSheet
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Dashboard/>
      <Form/>
      <Header/>
    </div>
  );
}

export default App;
