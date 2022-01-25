import react , {Component} from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
import Welcome from "./Welcome";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import TodoListComponent from "./TodoListComponent";
import TodoComponent from "./TodoComponent";
import LogOut from "./LogOut";
import RegisterComponent from "./Login/RegisterComponent";
import AuthenticateRouter from "./AuthenticateRouter";

class TodoPractice extends Component
{
    render()
    {
        return(
            <div>
                <Router>
                    <>
                    <HeaderComponent />                   
                    <Switch>
                    
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={RegisterComponent} />
                    <Route path="/welcome/:username" component={Welcome} />
                    <Route path="/todoList" component={TodoListComponent} />
                    <Route path="/updateTodo/:id" component={TodoComponent} />
                    <Route path="/addTodo/:id" component={TodoComponent} />
                    <Route path="/logOut" component={LogOut} />
                    <Route component={ErrorComponent} />  
                    
                    </Switch>
                    <FooterComponent />
                    </>
                </Router>
                
            </div>
        )
    }
}
export default TodoPractice