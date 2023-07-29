import React, { useState, useContext, useEffect } from 'react';
import UserContext from './../context/UserContext'
import { USER_ACTION } from '../utils/Constants';


const Registration = () => {
  const { userState, userDispatch } = useContext(UserContext)

  console.log("userState", userState)

  useEffect(() => {
    if(userState.isRegistration) {
      console.log("login")
      window.location = 'login'
      // redirect login
    }
  }, [userState])
  const initialFormData = {
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: '',
    },
    address: {
      city: '',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496',
      },
    },
    phone: '1-570-236-7033',
  };




  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    
    const { name, value } = e.target;
   switch (name) {
    case 'firstname':
      formData.name.firstname = value
      break;
    case 'lastname':
      formData.name.lastname = value
      break;
    case 'city':
      formData.address.city = value
      break;
    case 'street':
      formData.address.street = value
      break;
    case 'number':
      formData.address.number = value
      break;
    case 'zipcode':
      formData.address.zipcode = value
    break;
    case 'lat':
      formData.address.geolocation.lat = value
      break;
    case 'long':
      formData.address.geolocation.long = value
      break;
    default: 
    break;
   } 

    const myFormData = formData
    myFormData[name] = value
   setFormData({...formData})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, e.g., send the formData to a backend server for registration.
    
    userDispatch({action: USER_ACTION.USER_REGISTRATION, data: formData })
    // handleRegister(formData)
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={formData.name.firstname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={formData.name.lastname}
          onChange={handleChange}
          required
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.address.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={formData.address.street}
          onChange={handleChange}
          required
        />

        <label>Number:</label>
        <input
          type="number"
          name="number"
          value={formData.address.number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Zip Code:</label>
        <input
          type="text"
          name="zipcode"
          value={formData.address.zipcode}
          onChange={handleChange}
          required
        />

        <label>Latitude:</label>
        <input
          type="text"
          name="lat"
          value={formData.address.geolocation.lat}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Longitude:</label>
        <input
          type="text"
          name="long"
          value={formData.address.geolocation.long}
          onChange={handleChange}
          required
        />

        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default Registration;



