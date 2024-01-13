import React, { useState } from "react";
import User from "./User";

class Users extends React.Component {

	render() {
        if (this.props.users.length > 0) {
            return(
                <div className="users">
                        {this.props.users.map((user) => (
                            <div key={user.id}><User user={user} onDelete={this.props.onDelete} onSave={this.props.onSave}/></div>
                        ))}
                </div>
            );
        } else {
            return(
                <div className="user">
                    <h3>Пользователи не найдены</h3>
                </div>
            );
        }
	}
}

export default Users;