import react, { Component } from "react";
import TodoService from "../service/TodoService";
import moment from "moment";

class TodoListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.updateTodo=this.updateTodo.bind(this);
        this.loadTodoData=this.loadTodoData.bind(this);
        this.addTodoData=this.addTodoData.bind(this);
    }
    componentDidMount()
    {
        this.loadTodoData();
    }
    updateTodo=(id)=>{
        this.props.history.push(`/updateTodo/${id}`)
    }
    addTodoData()
    {
        this.props.history.push("/addTodo/-1")
    }

    deleteTodo(id)
    {
        let user = "Shyam";
        TodoService.deleteTodoData(user,id).then(response=>{
            this.loadTodoData();
        })
    }

    loadTodoData=()=>{
        let user ="Shyam";
         TodoService.getTodoList(user).then(response=>{
             this.setState({
                 todos : response.data
             })
         })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Todo List</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Todo Name</th>
                                <th scope="col">Todo Date</th>
                                <th scope="col">Course</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format("MM/DD/YYYY")}</td>
                                        <td>{todo.course}</td>
                                        <td><button className="btn btn-warning" onClick={()=>this.updateTodo(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-success" onClick={()=>this.deleteTodo(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <button className="btn btn-success" onClick={this.addTodoData}>Add</button>
                </div>
            </div>
        )
    }
}

export default TodoListComponent