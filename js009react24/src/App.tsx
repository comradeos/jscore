import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button';
import {useState, Fragment} from "react";
// import Another from './components/Another';

import './App.css';

const data = [
	{
		title: 'React',
		description: 'A JavaScript library for building user interfaces'
	},
	{
		title: 'Redux',
		description: 'A Predictable State Container for JS Apps'
	},
	{
		title: 'Jest',
		description: 'Delightful JavaScript Testing'
	}
];


const info = {
	title: 'AAA',
	description: 'BBB'
};

console.log(info.title);


function App() {
	const [content, setContent] = useState('title');

	function handleClick(info: any, type: string) {
		console.log('Button clicked', info[type]);
		setContent(info[type]);
	}

	return (
		<Fragment>
			<Header/>

			<h1>Hello, World!</h1>

			<ul>
				{data.map((item, index) => (
					<WayToTeach key={index} {...item}/>
				))}
			</ul>

			{/*<Another/>*/}

			<Button click={() => {
				handleClick(info, 'title');
			}}>title</Button>

			<Button click={() => {
				handleClick(info, 'description');
			}}>description</Button>

			<p>{content}</p>

			<Footer/>
		</Fragment>
	);
}

export default App;
