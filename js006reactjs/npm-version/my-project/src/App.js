import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Logo from "./img/logo.svg";

class App extends React.Component {
    helpText = "Enter your name"

	render() {
		return (
			<div>
				<Header title="test"/>
				<Header title="Моя шапка 1"/>
				<Header title="Моя шапка 2"/>
				<Header title="Моя шапка 3"/>
				<h1>{ (false) ? "Yes" : "No" }</h1>
				<input placeholder={this.helpText} onClick={this.inputClick} onMouseOver={this.mouseOver}/>
                <Image image={Logo} />
                <img src={Logo} width="50%"/>
			</div>
		);
	}

	inputClick() { console.log('Input clicked'); };
	mouseOver() { console.log('Mouse over'); }
}

export default App;