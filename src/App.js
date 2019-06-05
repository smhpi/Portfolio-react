import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Feature from "./components/Feature";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header id="header-wrap">
            <Nav />
            <Home />
          </header>
          <Feature />
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
