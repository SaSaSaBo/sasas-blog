import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
      <form className="loginForm">

        <label>Email</label>
        <input type="email" placeholder='itsanexample@gmail.com' className='loginInput' />
        <label>Password</label>
        <input type="password" placeholder='2yXq*Wf”@' className='loginInput' />
        <button className="loginButton">Login</button>

      </form>

      <button className="loginRegisterButton">Register</button>

    </div>
  );
}
