import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Logo from "./img/logo.svg";
import Button from "./components/Button";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			helpText: "helpText default",
			userData: "",
		}
		
		this.inputClick = this.inputClick.bind(this);
	}

	render() {
		return (
			<div>
				<Header title="test"/>

				{/* <Header title={this.state.helpText}/> */}
				{/* <h1>{ (false) ? "True" : "False" }</h1> */}

				<h2>{this.state.userData}</h2>
				
				<br/>
				
				<input 
					placeholder={this.state.helpText} 
					onClick={this.inputClick} 
					onMouseOver={this.mouseOver}  
					onChange={(event)=>{ this.setState({userData: event.target.value})}} 
				/>
                
				<br/>
                <br/>
				
				<Image image={Logo} width={"5%"}/>

				<br/>
				
				<Button text="Click me" />
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

	componentDidUpdate(prevProp) {
		if (this.state.helpText !== "aaa") {
			console.log('helpText !== "aaa"');
		}
	}
}

export default App;