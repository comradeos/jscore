import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import EditUser from "./EditUser";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false,
        };
    }
	render() {
		return(
            <div className="user" key={this.props.user.id}>
                {/* {console.log(this.user.id)} */}
                <IoCloseCircleSharp className="delete-icon" onClick={() => {this.props.onDelete(this.props.user.id)}} />
                <IoHammerSharp className="edit-icon" onClick={() => {this.setState({editForm: !this.state.editForm})}} />
                <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.isHappy ? 'Счастлив' : 'Не особо счастлив'}</p>

                {this.state.editForm && <EditUser user={this.props.user} onSave={this.props.onSave}/>}
            </div>
		);
	}
}

export default User;