import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Logo from "./img/logo.svg";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			helpText: "helpText default",
			userData: "",
		}

		this.inputClick = this.inputClick.bind(this);
	}

    helpText = "helpText variable"

	render() {
		return (
			<div>
				<Header title="test"/>
				<Header title="Моя шапка 1"/>
				<Header title="Моя шапка 2"/>
				<Header title={this.state.helpText}/>
				
				<h1>{ (false) ? "True" : "False" }</h1>

				<h2>{this.state.userData}</h2>

				<input 
					placeholder={this.state.helpText} 
					onClick={this.inputClick} 
					onMouseOver={this.mouseOver}  
					onChange={(event)=>{ this.setState({userData: event.target.value})}} 
				/>
                
				<Image image={Logo} width={50}/>
                
				<img src={Logo} width={25}/>
			</div>
		);
	}

	inputClick() { 
		this.setState({helpText: "helpText changed"});
		console.log('Input clicked'); 
	};

	mouseOver() { 
		console.log('Mouse over'); 
	}
}

export default App;