import React from 'react';

import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Order from './Components/Order/Order';
import Review from './Components/Review/Review';
import Service from './Components/Service/Service';


function App() {
  return (
    <Router >
      <Switch>
        <Route  path="/home">
          <Home></Home>
           </Route>
           <Route  exact path = "/">
          <Home></Home>
           </Route>
           <Route  exact path = "/order" > 
             <Order></Order>
           </Route>
           <Route exact path = "/review"> 
           <Review></Review>
           </Route>
           <Route exact path = "/service"> 
           <Service></Service>
           </Route>
           <Route path = "*">
           <NoMatch></NoMatch>
           </Route>
         </Switch>
    </Router>
  );
}

export default App;
