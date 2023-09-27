import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault()
    alert(email, username, password);
    navigate('/')
  };
  return (
    <div className="Register">
      <form onSubmit={onRegister}>
        <h3 className="form-title text-center">Register</h3>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" id="auth-btn" value="Register" />
      </form>
      <p className="log-reg text-center">
        <Link className="link" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
