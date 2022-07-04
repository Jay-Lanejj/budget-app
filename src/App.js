import logo from './logo.svg';
import './App.css';


import React, {useState, useEffect} from 'react'
import Home from "./components/home"
import Login from "./components/login"
import SignUp from './components/signup'


import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {collection, getDocs} from 'firebase/firestore'

function App() {
  const [transaction, setTransaction] = useState ([]);

  useEffect(()=>{

  })
  
  const addTransaction = ((amout, name, transactionType)=> {

    setTransaction((item)=> [...item, {
      amount:amout,
      name: name ,
      transactionType:transactionType
    }])
  })

  return (

    <Router>
      <switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>

        <Route path="/home">
          <Home list={transaction} add={addTransaction}/>
        </Route>

        
      </switch>
       
    </Router>
 

  );
}

export default App;

