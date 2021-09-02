import React from "react";

import {Navbar, Footer} from "./components";
import {Home, Login, Register} from "./routes";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./css/App.css";

function App() {
  return (
    <Router>
        <div className="content">
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>

            <Route path="/register">
              <Register/>
            </Route>
          </Switch>
        <Footer/>
        </div>
    </Router>
  );
}

export default App;