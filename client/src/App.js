import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home";
import Login from "./routes/Login";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;