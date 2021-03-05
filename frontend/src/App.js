import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import View from "./view";
import Add from "./addPost";
import Delete from "./deletePost";
import Update from "./updatePost";

function App(){
    return (
      <Router>
        <div>
          <Route exact path='/' component={View} />
          
          <Route path='/add' component={Add} />
          <Route path='/delete' component={Delete} />
          <Route path='/update' component={Update} />

        </div>
      </Router>
    );
}

export default App;
