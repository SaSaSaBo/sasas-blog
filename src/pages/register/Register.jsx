import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
      <form className="registerForm">

        <label>Username</label>
        <input type="text" placeholder='Username' className='registerInput' />
        <label>Email</label>
        <input type="email" placeholder='itsanexample@gmail.com' className='registerInput' />
        <label>Password</label>
        <input type="password" placeholder='2yXq*Wf”@' className='registerInput' />
        <button className="registerButton">Register</button>

      </form>

      <button className="registerLoginButton">Login</button>

    </div>
  );
}
