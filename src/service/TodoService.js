import axios from "axios";

class TodoService
{
    getTodoList(user)
    {
        return axios.get(`http://localhost:8888/jpa/users/${user}/todos`);
    }

    getTodoById(user,id)
    {
        return axios.get(`http://localhost:8888/jpa/users/${user}/todos/${id}`);
    }

    updateTodoById(user,id,todo)
    {
        return axios.put(`http://localhost:8888/jpa/users/${user}/todos/${id}`,todo);
    }

    deleteTodoData(user,id)
    {
        return axios.delete(`http://localhost:8888/jpa/users/${user}/todos/${id}`);
    }
     
}

export default new TodoService()