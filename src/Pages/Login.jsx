import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="Register">
      {/* <div className="form-body"> */}
        <form action="">
          <h3 className="form-title text-center">Log In</h3>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        
        <input type="password" name="password" placeholder="Password" id="password" />
        <input type="submit" id="auth-btn" value="Log In" />
        </form>
        <p className="log-reg text-center">
          <Link className="link" to='/register'>
            Register
          </Link>
          {/* <Link to='/login'></Link> */}
        </p>
      {/* </div> */}
    </div>
  )
}

export default Login