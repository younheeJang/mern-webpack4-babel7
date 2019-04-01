import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../routes/Home';
import NoMatch from '../routes/NoMatch';
import List from '../routes/List';
import Header from './Header';
import Footer from './Footer';

const App = () =>{
  return (
    <Router>
      <div>
        <Header/>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};
export default App;
