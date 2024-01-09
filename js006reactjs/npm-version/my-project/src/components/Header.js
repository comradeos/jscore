import React from "react";
import Button  from "./Button";

class Header extends React.Component {
	render() {
		return(
			<header className="header">
				<h1>{(this.props.title === "test") ? "Yeah" : this.props.title}</h1>
				<br/>
				<Button text="Click me"/> <br/><br/>
				<Button/>
			</header>	
		);
	}
}

export default Header;