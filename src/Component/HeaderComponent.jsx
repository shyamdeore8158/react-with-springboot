import react , {Component} from "react";
import { Link } from "react-router-dom";
import LoginService from "../service/LoginService";

class HeaderComponent extends Component
{
    
    render()
    {
        console.log("Header Render")
        const isUserLoggedIn = true
        console.log("Header "+isUserLoggedIn)
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand">Todo App</div>
                        <ul className="navbar-nav">
                            <li><Link className="nav-link" to="/welcome/Shyam">Home</Link></li>
                            {isUserLoggedIn && <li><Link className="nav-link" to="/todoList">Todos</Link></li>}
                            
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/logOut" onClick={LoginService.removedSessionStorage()}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent