import React, { useState, useContext, useEffect } from 'react';
import UserContext from './../context/UserContext'
import { successMessage } from '../utils/Messages';
import { USER_ACTION } from '../utils/Constants';
import { useNavigate } from 'react-router-dom'


const Registration = () => {
  const redirect = useNavigate()
  const [userState, userDispatch] = useContext(UserContext)


  

  useEffect(() => {
    if (userState.isRegistration) {
      redirect('/login/', {state: successMessage.register})
      console.log("login")
     // window.location = 'login'
      // redirect login
    }
  }, [userState])
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    avatar: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    const myFormData = formData
    myFormData[name] = value
    setFormData({ ...formData })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    userDispatch({ action: USER_ACTION.USER_REGISTRATION, data: formData })
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="container py-5 px-10">
      <h2 className="mb-5">Registeration</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-control"
          id="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="avatar" className="form-label">
          Avatar
        </label>
        <input
          type="text"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          required
          className="form-control"
          id="avatar"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
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
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="form-control"
          id="password"
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
      </div>
    </form>
  )
}

export default Registration



