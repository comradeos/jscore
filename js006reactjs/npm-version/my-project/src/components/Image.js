import React from "react";

class Image extends React.Component {
	render() {
		return(
			<div>
				<br/>
				<img src={this.props.image} width={this.props.width}/>
			</div>
		);
	}
}

export default Image;