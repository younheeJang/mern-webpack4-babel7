import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../routes/Home';
import NoMatch from '../routes/NoMatch';
import List from '../routes/List';

class Header extends React.Component {
	render() {
	   return (
		  <div>
		  <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/list">List</Link>
      </li>
    </ul>

		  </div>
	   );
	}
 }

 export default Header;