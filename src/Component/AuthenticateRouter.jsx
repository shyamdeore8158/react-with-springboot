import react , {Component} from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import LoginService from "../service/LoginService";


class AuthenticateRouter extends Component
{
    render() {
        console.log("AuthenticateRouter "+LoginService.isUserLoggedIn())
        if (LoginService.isUserLoggedIn()) {
            return <Route {...this.props} />
        }
        else {
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticateRouter
