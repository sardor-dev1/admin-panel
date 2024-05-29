import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
    <div className="container">
      <div className="row mt-4 offset-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">login</h1>
            </div>
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="username"
                  name="username"
                  className="form-control my-2"
                />
                <input
                  type="password"
                  onChange={handleChange}
                  placeholder="password"
                  name="password"
                  className="form-control my-2"
                />
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-success" type="submit" form="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
