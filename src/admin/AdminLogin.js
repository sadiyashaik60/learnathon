import React, { useState } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

export default function AdminLogin() 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2014/checkadminlogin', formData);
      if (response.data!=null) 
      {
        navigate("/adminhome")
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div>
 <p data-item='HUNGRY HUB'>HUNGRY HUB</p>
<section>
  <nav>
    <ul class="menuItems">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/mainabout">About</Link></li>
      <li><Link to="/maincontact">Contact</Link></li>
      <li><Link to="/customerregistration">Register</Link></li>
      <li><Link to="/customerlogin">Login</Link></li>
      <li><Link to="/adminlogin">admin</Link></li>
    </ul>
  </nav>
</section>
      <h3 align="center"><u>Admin Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <div class="formcontainer">
    <form onSubmit={handleSubmit}>
        <div class="form-row">
            <div class="input-data">
                <label for="">Username</label>
                <div class="underline"></div>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div class="input-data">
                <label for="">Password</label>
                <div class="underline"></div>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
        </div>
        <div class="form-row submit-btn">
            <div class="input-data">
                <div class="inner"></div>
                <input type="submit" value="LOGIN"/>
            </div>
        </div>
      </form>
 </div>
    </div>
  );
}