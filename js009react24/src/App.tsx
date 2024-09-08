import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button';

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


function App() {
	function handleClick() {
		console.log('Button clicked');
	}

	return (
		<div>
			<Header/>
			<h1>Hello, World!</h1>
			<ul>
				{data.map((item, index) => (
					<WayToTeach key={index} {...item}/>
				))}
			</ul>

			<Button click={() => {
				handleClick();
			}}>React</Button>


			<Button click={() => {
				handleClick();
			}}>Redux</Button>


			<Button click={() => {
				handleClick();
			}}>Jest</Button>

			<Footer/>
		</div>
	);
}

export default App;
