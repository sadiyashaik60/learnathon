import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function About() {
  const mystyle ={
    color: "black",
  fontFamily: "Arial",
  fontSize: "16px", // Adjust the font size as needed
  textAlign:"justify",
  padding: "0 100px",
  textTransform: "none"
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
<div>
      <p style={mystyle}>HUNGRYHUB, your one-stop shop for delicious food delivered straight to your door! We're passionate about connecting you with the best restaurants in city and making the food ordering experience a breeze.</p>
      <h3 style={mystyle}>Here's what sets us apart:</h3>
      <p style={mystyle}>Wide Variety: We offer a vast selection of restaurants, from your favorite local spots to popular national chains. Craving pizza? Sushi? Thai? We've got you covered.</p>
      <p style={mystyle}>Convenience: Order your food online or through our mobile app in just a few clicks. No more waiting on hold or driving out in traffic.</p>
      <p style={mystyle}>Customer Satisfaction: We're committed to providing excellent customer service. If you have any questions or concerns, our friendly support team is always happy to help.</p>
   


    <h2 style={mystyle}>Our MISSION</h2>
    <p style={mystyle}>Our mission is to simplify the food ordering process and make it enjoyable for everyone. We want to help you discover new restaurants, try new dishes, and have a great dining experience without leaving the comfort of your home</p>

</div>
    </div>
  )
}
