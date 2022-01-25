import react, { Component } from "react";
import moment from "moment";
import { Field, Form, Formik } from "formik";
import TodoService from "../service/TodoService";
import Select from 'react-select';


class TodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format("YYYY-MM-DD"),
            course:'',
            selectValues : [
                {value : "Java" , label : "Learn Java"},
                {value : "React" , label : "Learn React"},
            ]
        }
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        let user = "Shyam";
        if (this.state.id===-1) {          
            return
        }

        TodoService.getTodoById(user, this.state.id).then(response => {
            this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),
                course : response.data.course
            })
        });
    }
    onSubmit(values) {
        let user = "Shyam";
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate,
            course:values.course
        }
        console.log(todo)
        if (this.state.id === -1) {
             alert(1)
        }
        else {
            
            TodoService.updateTodoById(user, this.state.id, todo).then(response => {
                this.props.history.push("/todoList")
            })
        }
    }
    render() {

        let description = this.state.description;
        let targetDate = this.state.targetDate;
        let course = this.state.course;
        return (
            <div>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate,course }}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}
                        onSubmit={this.onSubmit}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field name="description" className="form-control" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field name="targetDate" type="date" className="form-control" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Field as="select" name="course" className="form-control">
                                            <option value="Java">Java</option>
                                            <option value="React">React</option>
                                            <option value="Spring Boot">Spring Boot</option>
                                        </Field>
                                    </fieldset>
                                    
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent