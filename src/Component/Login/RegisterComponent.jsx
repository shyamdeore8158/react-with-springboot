import { ErrorMessage, Field, Form, Formik } from "formik";
import react, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from "../../service/LoginService";
class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    onSubmit(values) {
        let login = {
            username: values.username,
            password: values.password,
            errorMessage: false
        }
        LoginService.registerUser(login).then(response => {
            this.props.history.push("/login")
        })
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
    render() {
        let username = this.state.username;
        let password = this.state.password;
        return (
            <div>
                <div className="container">
                    <Formik
                        initialValues={{ username, password }}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                    >
                        {
                            (props) => (

                                <Form autoComplete="false">
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
                                        <Field name="password" className="form-control" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <button type="submit" className="btn btn-success">Save</button>
                                    </fieldset>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default RegisterComponent