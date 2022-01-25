import react , {Component} from "react";
import { Link } from "react-router-dom";

class LogOut extends Component
{
    render()
    {
        return(
            <div>
                <h3>Thanks for visiting !!!</h3>

                 <br/>
                 <h4>Login <Link to="/login"> here</Link></h4>
            </div>
        )
    }
}

export default LogOut
