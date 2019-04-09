import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import Home from '../routes/Home';
import NoMatch from '../routes/NoMatch';
import List from '../routes/List';
import Item from '../routes/Item';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
 render(){
  return (
    <Router>
      <div>
      <Container>
        <Header/>
        </Container>
        <div>
          <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/item" component={Item} />
            <Route component={NoMatch} />
          </Switch>
          </Container>
        </div>
        <Container>
        <Footer/>
        </Container>
      </div>
    </Router>
  );
}
};
export default App;
