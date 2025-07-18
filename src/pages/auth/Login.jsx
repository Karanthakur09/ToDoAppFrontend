import React, { useState } from "react";
import { Link} from "react-router-dom";
import "./AuthStyles.css";
import AuthServices from "../../services/AuthServices";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const navigate = useNavigate();
  //login function
  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const data={email,password};
      const res= await AuthServices.loginUSer(data);
      console.log(res);

    } catch (err) {
    
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="mb-3">
          <i className="fa-solid fa-circle-user"></i>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-bottom">
          <p className="text-center">
            not a user? please
            <Link to="/register"> Regiser</Link>
          </p>
          <button type="submit" className="login-btn" onClick={loginHandler}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;