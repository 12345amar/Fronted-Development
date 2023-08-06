import React, { useState, useContext } from 'react';
import UserContext from './../context/UserContext'
import { USER_ACTION } from '../utils/Constants';
import { useLocation } from 'react-router-dom'

const Login = () => {
  const history = useLocation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userState, userDispatch] = useContext(UserContext)
  
  console.log("userState", userState, history)
  const { state = null } = history
  console.log("state", state)
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    userDispatch({action: USER_ACTION.USER_LOGIN, data: credentials })
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
    <div className="container py-5 px-10">
    {state && <div class="alert alert-success" role="alert">
 {state}
</div>}
    <h2 className="mb-5">Login</h2> 
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="form-control"
        id="email"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
         type="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        required
        className="form-control"
        id="password"
      />
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
    </div>
  </form>

  );
};

export default Login;
