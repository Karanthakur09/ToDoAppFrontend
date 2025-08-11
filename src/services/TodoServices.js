import axios from "axios";


const user=JSON.parse(localStorage.getItem('todoapp'));
//default auth header
axios.defaults.headers.common['Authorization']=`Bearer ${user.token}`

//create todo

const createTodo=(data)=>{
    return axios.post(`${import.meta.env.VITE_API_URL}/todo/create`,data);
}

const TodoServices ={createTodo};

export default TodoServices;