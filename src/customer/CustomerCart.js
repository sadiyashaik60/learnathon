import React from 'react'
import {Link} from 'react-router-dom'
import './customer.css'

export default function CustomerCart() {
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
        <h4>I am in Customer Cart Page</h4>
    </div>
  )
}
