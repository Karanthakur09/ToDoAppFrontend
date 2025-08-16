import axios from "axios";

//get user token
const getAuthHeaders = () => {
  const user = JSON.parse(localStorage.getItem(`${import.meta.env.VITE_LOCAL_KEY}`));
  return { Authorization: `Bearer ${user?.token}` };
};

const createTodo = (data) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/todo/create`, data, { headers: getAuthHeaders() });
};

const getAllTodo = (id) => {
  return axios.post(
    `${import.meta.env.VITE_API_URL}/todo/getAll/${id}`,
    {},
    { headers: getAuthHeaders() }
  );
};

const updateTodo = (id, data) => {
  return axios.patch(`${import.meta.env.VITE_API_URL}/todo/update/` + id, data, { headers: getAuthHeaders() });
}

const deleteTodo = (id) => {
  return axios.delete(`${import.meta.env.VITE_API_URL}/todo/delete/` + id, { headers: getAuthHeaders() });
}

const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };
export default TodoServices;