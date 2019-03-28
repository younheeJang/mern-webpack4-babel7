import React, { Component } from 'react';
import '../css/App.css';
import logo from '../img/logo.svg';

const Header = ({title}) => (<header>{title}</header>);
const Main = ({title}) => (<main>{title}</main>);
const Footer = ({title}) => (<footer>{title}</footer>);
class App extends Component {
  render() {
    const {header,main,footer} = this.props;
    return (
      <div className="app">
        <Header title={header} />
        <Main title={main} />
        <Footer title={footer}/>
      </div>
    );
  }
}
export default App;