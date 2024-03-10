import React from 'react'
import {Link} from 'react-router-dom'
import './customer.css'

export default function CustomerContact() {
  return (
    <div>
        <p data-item='HUNGRY HUB'>HUNGRY HUB</p>
<section>
  <nav>
    <ul class="menuItems">
      <li><Link to="/customerhome">Home</Link></li>
      <li><Link to="/customerabout">About</Link></li>
      <li><Link to="/customercontact">Contact</Link></li>
      <li><Link to="/customercart">Cart</Link></li>
      <li><Link to="/customerprofile">Profile</Link></li>
      <li><Link to="/">Logout</Link></li>
    </ul>
  </nav>
</section>
<div class="formcontainer">
    <div class="text">
        Contact us Form
    </div>
    <br/>
    <form action="#">
        <div class="form-row">
            <div class="input-data">
                <label for="">First Name</label>
                <div class="underline"></div>
                <input type="text" required/>
                
            </div>
            <div class="input-data">
                <label for="">Last Name</label>
                <div class="underline"></div>
                <input type="text" required/>
                
            </div>
        </div>
        <div class="form-row">
            <div class="input-data">
            <label for="">Email Address</label>
            <div class="underline"></div>
                <input type="text" required/>
                
            </div>
            
        </div>
        <div class="form-row">
            <div class="input-data textarea">
            <label for="">Write your message</label>
            <div class="underline"></div>
            <br />
                <textarea rows="8" cols="80" required></textarea>
                
                <br />
            </div>
        </div>
        
        <div class="form-row submit-btn">
            <div class="input-data">
                <div class="inner"></div>
                <input type="submit" value="submit"/>
            </div>
        </div>
    </form>
</div>
    </div>
  )
}
