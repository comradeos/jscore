import React from 'react';
import './Header.css';

function Header() {
	const now = new Date();

	return (
		<header>
			<h1>React App | <span>Time: {now.toLocaleTimeString()}</span></h1>
		</header>
	);
}

export default Header;