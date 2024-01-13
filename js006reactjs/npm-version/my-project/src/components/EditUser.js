import React from "react";

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname,
            bio: this.props.user.bio,
            age: this.props.user.age,
            isHappy: this.props.user.isHappy
        };
    }

	render() {
		return(
            <form>
                <br/>
                <input type="text" placeholder="Имя" onChange={(e) => {this.setState({ firstname: e.target.value})}} value={this.state.firstname}/>
                <input type="text" placeholder="Фамилия"  onChange={(e) => {this.setState({ lastname: e.target.value})}} value={this.state.lastname}/>
                <textarea type="text" placeholder="Био"  onChange={(e) => {this.setState({ bio: e.target.value})}} value={this.state.bio}></textarea>
                <input type="text" placeholder="Возраст"  onChange={(e) => {this.setState({ age: e.target.value})}} value={this.state.age}/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" value="Добавить"  onChange={(e) => {this.setState({ isHappy: e.target.checked})}} checked={this.state.isHappy}/>
                <button type="button" className="btn2" onClick={() => { 
                    this.props.onSave(this.state) }}>Сохранить</button>
            </form>
		);
	}
}

export default EditUser;