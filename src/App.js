import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import Abouts from './components/Pages/About';
import Recipes from './components/Pages/Recipes';
import Milk from './components/Pages/Milk';
import Distributor from './components/Pages/Distributor';
import Login from './components/Pages/Login';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
    <Navbar />
  <Switch>
      <Route path='/' exact component={Home} />   
      <Route path='/about' exact component={Abouts} />   
      <Route path='/recipes' exact component={Recipes} />   
      <Route path='/products/milk' exact component={Milk} />   
      <Route path='/distributors' exact component={Distributor} />   
      <Route path='/login' exact component={Login} />   
      <Route path='/contact' exact component={Contact} />   
     
     </Switch>
   </Router>
  );
}

export default App;
