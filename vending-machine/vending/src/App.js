import React, { Component } from "react";
import Chips from "./Chips";
import    from "./Sardlines";
import Soda from "./Soda";
import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import { Router, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <VendingMachine />
        <Soda />
        <Sardlines />
        <Chips />

        {/* <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/sardines" render={() => <Sardlines />} />
          <Route exact path="/chips" render={() => <Chips />} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
