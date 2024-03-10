import React from 'react'
import {Link} from 'react-router-dom'
import './admin.css'

export default function ViewSellers() {
  return (
    <div>
            <p data-item='HUNGRY HUB'>HUNGRY HUB</p>
<section>
  <nav>
    <ul class="menuItems">
      <li><Link to="/customerhome">Home</Link></li>
      <li><Link to="/viewcustomers">Customers</Link></li>
      <li><Link to="/viewsellers">Sellers</Link></li>
      <li><Link to="/">Logout</Link></li>
    </ul>
  </nav>
</section>
        <h4>View Sellers Page</h4>
        
    </div>
  )
}
