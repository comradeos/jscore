import React from "react";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.key1,
            value: this.props.value,
            testList: [1,2,3] 
        };
    }

	render() {
		return(
			<div>
                <h1>{this.state.key ?? 'ніфіга key'}</h1>
                <h1>{this.state.value ?? 'ніфіга value'}</h1>
                <h1>{this.state.testList.length}</h1>
                <button type="button" onClick={()=>{this.action()}}>Добавить</button>
            </div>
		);
	}

    action() {
        // alert('action');
        this.setState({testList: [...this.state.testList, 4]});
    }
}

export default Test;