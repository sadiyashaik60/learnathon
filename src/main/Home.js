import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function Home() {
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
<div id="row1"> Welcome</div>


<div class="container">
<div class="image-gallery">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrz8f66U-IU8hFujqUeqB06jbkiZ1uVHu8dQ&usqp=CAU"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWwAg5Q1wJRAks6y14UpYZypNzvgUruqcMw&usqp=CAU"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH04ml9A9mjuYOwjn1GIKH_0EncZq7YN2htg&usqp=CAU"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSub7JQuafRX1JGyFqHWzAinC14tz-njF1VaQ&usqp=CAU"/>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvsruVQmiGoj7cB3P-ggQezrUnoANHcsQ4A&usqp=CAU"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSig6-mNcogok2Qh2ru-kcfbwJfa4EnTRbjNQ&usqp=CAU"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsjIP4_YbvzuH05CopUcPgca2tLoDOh2wkg&usqp=CAU"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndFDi_K-yNLK8alNhmg3Gh7aBLXeaitVFJw&usqp=CAU"/>
</div>
</div>
    </div>
  )
}
