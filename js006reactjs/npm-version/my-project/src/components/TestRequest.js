import React from "react";
import axios from "axios";

const baseUrl = 'https://reqres.in/api/users?page=2';

class TestRequest extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users: []
        };

        axios.get(baseUrl)
            .then((response) => {
                console.log(response.data.data);
                this.setState({users: response.data.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

	render() {
		return(
			<div>
                <h1>TestRequest</h1>
                <ul>
                    {this.state.users.map((user) => {
                        return <li key={user.id}>{user.first_name} {user.last_name}</li>
                    })}
                </ul>
            </div>
		);
	}
}

export default TestRequest;