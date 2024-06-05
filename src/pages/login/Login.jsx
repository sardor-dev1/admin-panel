import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./index.scss";
import loginBg from "../../assets/images/loginBg.jpg";

const Login = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    if (username === "admin" && password === "123") {
      navigate("/main");
    } else alert("stop");
  };
  return (
    <section className="login__wrap">
    <div className="container">
      <div className="login">
        <div className="login__modal">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">login</h1>
            </div>
            <div className="card-body">
              <form className="form" id="submit" onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="username"
                  name="username"
                  className="login__inp my-2"
                />
                <input
                  type="password"
                  onChange={handleChange}
                  placeholder="password"
                  name="password"
                  className="login__inp my-2"
                />
              </form>
            </div>
            <div className="card-footer">
              <button className="login__btn" type="submit" form="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;
