import React from 'react'
import {Link} from 'react-router-dom'
import './customer.css'

export default function CustomerProfile() {
  const gender = <h4>Gender:Female</h4>
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
    <div className="card">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU" width ="50%" /><br/>
            <h3>NAME: RIYA</h3><br/>
            {gender}<br/>
            <i>custtwo@gmail.com</i><br/><br/>
            <i>9573904874</i><br/>
            
    </div>

    </div>
  )
}
