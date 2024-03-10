import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './admin.css'

export default function ViewCustomers() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:2014/viewcustomers');
      setCustomers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = async (email) => {
    try {
      await axios.delete(`http://localhost:2014/deletecustomer/${email}`);
      fetchCustomers();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
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
      <h1>Customers</h1>
      <div class="container">
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(customers) && customers.length > 0 ? (
    customers.map((customer, index) => (
      <tr key={index}>
        <td>{customer.fullname}</td>
        <td>{customer.gender}</td>
        <td>{customer.dateofbirth}</td>
        <td>{customer.email}</td>
        <td>{customer.location}</td>
        <td>{customer.contact}</td>
        <td>
          <button onClick={() => deleteCustomer(customer.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
        </div>
    </div>
  );
}