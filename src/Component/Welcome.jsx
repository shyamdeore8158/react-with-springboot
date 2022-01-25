import react, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from "../service/LoginService";

class Welcome extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const isUserLoggedIn = LoginService.isUserLoggedIn();
        console.log("Welcome "+isUserLoggedIn)
        return (
            <div>
                <h2>Welcome : {this.props.match.params.username}</h2>

                You can manage your todo list <Link to="/todoList"> here</Link>
            </div>
        )
    }
}

export default Welcome