import { ErrorMessage, Field, Form, Formik } from "formik";
import react, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from "../service/LoginService";
 
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Shyam',
            password: 'Shyam'
        }
        this.onSubmit= this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
        
    }
    validate(values) {
        
        let errors = {}
        if (!values.username) {
            errors.username = "Please Enter Username"
        }

        if (!values.password) {
            errors.password = "Please Enter Password"
        }
        //console.log(errors)

        return errors;

    }

    onSubmit=(values)=> {
        LoginService.setSessionStorage(values.username);
         this.props.history.push(`/welcome/${values.username}`)
    }
    render() {
        let username = this.state.username;
        let password = this.state.password;
        return (
            <div>
                <div className="container">
                    <h1>Todo Management</h1>
                    <Formik
                        initialValues={{ username, password }}
                        validateOnBlur={false}
                        validateOnChange={false}
                        onSubmit={this.onSubmit}
                        validate={this.validate}                       
                        enableReinitialize={true}
                        
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="username" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="password" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Username</label>
                                        <Field name="username" className="form-control" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field name="password" type="password" className="form-control" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Login</button>
                                </Form>
                            )
                        }
                    </Formik>
                    <br/>
                    <h5>Dont have account , You can create <Link to="/register"> here</Link></h5>
                </div>
            </div>
        )
    }
}

export default Login