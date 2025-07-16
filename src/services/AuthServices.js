import axios from "axios";

const registerUser = (data) => {
  return axios.post("/user/register", data);
};

const loginUSer = (data) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/user/login`, data);
};

const AuthServices = { registerUser, loginUSer };

export default AuthServices;