import React, { useState } from 'react';
import './customer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'


export default function CustomerLogin() 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2014/checkcustomerlogin', formData);
      if (response.data!=null) 
      {
        console.log(response.data)
        navigate("/customerhome");
        // window.location.href = "https://newerp.kluniversity.in/index.php"
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
      <h3 align="center"><u>Customer Login</u></h3>
      {
        message ? <h4 align="center" color='green'>{message}</h4> : <h4 align="center" color='red'>{error}</h4>
      }

<div class="formcontainer">
    <form onSubmit={handleSubmit}>
        <div class="form-row">
            <div class="input-data">
                <label for="">Email</label>
                <div class="underline"></div>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div class="input-data">
                <label for="">Password</label>
                <div class="underline"></div>
                <input type="password" id="password" value={formData.password} onChange={handleChange} required />
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