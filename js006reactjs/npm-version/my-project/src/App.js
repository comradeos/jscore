import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Test from "./components/Test";
import TestRequest from "./components/TestRequest";

class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, firstname: "Вася", lastname: "Пупкин", age: 25, bio: "Вася любит плавать и гулять по горам", isHappy: true },
                { id: 2, firstname: "Петя", lastname: "Пупкин", age: 35, bio: "Петя любит плавать" , isHappy: false },
            ],
        };

		this.addUser = this.addUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
		this.saveUser = this.saveUser.bind(this);
		this.updateUser = this.updateUser.bind(this);
    }

	render() {
		return (
			<div>
				<Header title="Список пользователей"/>
				<main>
					<Users users={this.state.users} onDelete={this.deleteUser} onSave={this.saveUser}/>
					<h1>users: {this.state.users.length}</h1>
				</main>
				<aside>
					<AddUser onAdd={this.addUser} />
				</aside>
				{/* <Test key1="a" value="b" /> */}

				<TestRequest />
			</div>
		);
	}

	addUser(user) {
		const id = this.state.users.length + 1;
		user.id = id;
		console.log(user.id);
		this.setState({users: [...this.state.users, user]});
	}
	    
	deleteUser(id) {
		let users = this.state.users.filter((user) => user.id !== id);
		this.setState({users: users});
	}

	saveUser(user) {
		console.log(`saved`);
		console.log(user);
		this.updateUser(user);
	}

	updateUser(updatedUser) {
		let users = this.state.users;
		let index = this.getUserIndexById(updatedUser.id)
		users[index] = updatedUser; 
		this.setState({users: users});
	}

	getUserIndexById(id) {
		return this.state.users.findIndex(user => user.id === id);
	}
}

export default App;