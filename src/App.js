import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Insert from './components/Insert';
import Edit from './components/Edit';
import View from './components/View';
import Payment from './components/Payment';


import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 className="my-0 mr-md-auto font-weight-normal">Smart Wash</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link to={'/'} className="p-2 text-dark" >Home</Link>
           
            <Link to={'/view'} className="p-2 text-dark" >View</Link>

          </nav>

        </div>

        <h2>Welcome to Smart Wash</h2><br></br>

        <Switch>
           <Route exact path='/' component={Home}/>
          <Route exact path='/insert' component={Insert} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/view' component={View} />
          <Route path='/payment' component={Payment} />
        </Switch>

      </div>
      <Footer/>
    </Router>
  );
}

export default App;
