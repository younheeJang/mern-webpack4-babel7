import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components';
import Home from '../routes/Home';
import NoMatch from '../routes/NoMatch';
import List from '../routes/List';
import Item from '../routes/Item';

class Header extends Component {
	render() {
	   return (
		  <div>
		  
      
<Button check><Link to="/" style={{ color: '#FFF' }}>Home</Link></Button>
<Button cancel><Link to="/list" style={{ color: '#dc143c' }}>List</Link></Button>
<Button check><Link to="/item" style={{ color: '#FFF' }}>Item</Link></Button>
<Anchor cancel href="https://blog.naver.com/edam0530" style={{ color: '#dc143c' }}>MyBlog</Anchor>
    
		  </div>
	   );
	}
 }


const Container = styled.div`
 height:100vh;
 width:100%;
 background-color:#bdc3c7;
`;
 //styled.반복하려는 html요소.
const Button = styled.button`
border-radius: 4px;
  padding: 5px;
  min-width:120px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer; 
  -webkit-appearance: none;
  &:active,
  &:focus{
    outline:none;
  }
  background-color:${props=>props.cancel?"white":"#DC143C"};
  color:${props=>props.cancel?"#DC143C":"white"};
  border:${props=>props.cancel?"1px solid #DC143C":""};
`;

const Anchor = Button.withComponent("a");

 export default Header;