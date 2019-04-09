import React, {Component, Fragment} from 'react';
import {Route, Link} from 'react-router-dom';
import styled, {createGlobalStyle, css, ThemeProvider} from 'styled-components';
import theme from '../styled-component/theme';

const GlobalStyle = createGlobalStyle`
	body{
		color:${props=>(props.whiteColor?'white':'black')};
	}
`

const awesomeCard = css`
	box-shadow:0 4px 6px rgba(5,5,9,0.11), 0 1px 3px rgba(0,0,0,0.08);
	background-color:white;
	border-radius:10px;
	padding:10px;
	`;

const Input = styled.input.attrs({
	required:true
})`
-webkit-appearance: none;
  &:active,
  &:focus{
    outline:none;
  }
border:none;
border-radius:5px;
background-color:#fcf1ef;
${awesomeCard};
`;

const Card = styled.div`
  background-color:white;
`;

const Container = styled.body`
  height:100px;
  width:100%;
	background-color:pink;
	${Card}{
		background-color:blue;
	}
`;

const Button = styled.button`
  border-radius:30px;
  padding:25px 15px;
  background-color:${props=>props.theme.successColor};
`;

class Item extends Component {
	render(){
		return (
			<div>
			<Input placeholder="Item"/>
			<ThemeProvider theme={theme}>
			<Container>
			<Form/>
			</Container>
			</ThemeProvider>
			</div>
		);
	}
};

const Form =()=>(<Card><Button>Item</Button></Card>);

export default Item;