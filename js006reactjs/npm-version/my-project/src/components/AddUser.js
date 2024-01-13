import React from "react";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            bio: '',
            age: 1,
            isHappy: false
        };
    }

	render() {
		return(
            <form ref={(element) => {this.myForm = element}}>
                <input type="text" placeholder="Имя" onChange={(e) => {this.setState({ firstname: e.target.value})}}/>
                <input type="text" placeholder="Фамилия"  onChange={(e) => {this.setState({ lastname: e.target.value})}}/>
                <textarea type="text" placeholder="Био"  onChange={(e) => {this.setState({ bio: e.target.value})}}></textarea>
                <input type="text" placeholder="Возраст"  onChange={(e) => {this.setState({ age: e.target.value})}}/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" value="Добавить"  onChange={(e) => {this.setState({ isHappy: e.target.checked})}}/>
                <button type="button" onClick={() => { 
                    this.myForm.reset();
                    this.props.onAdd({
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                }) }}>Добавить</button>
            </form>
		);
	}
}

export default AddUser;