// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import {Routes,Route} from 'react-router-dom'

import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";


import MainHome from './main/Home'
import MainContact from './main/Contact'
import MainAbout from './main/About'
import CustomerRegistration from "./customer/Registration";
import CustomerLogin from "./customer/CustomerLogin";
import AdminLogin from "./admin/AdminLogin";
import CustomerHome from './customer/CustomerHome';
import CustomerContact from './customer/CustomerContact';
import CustomerAbout from './customer/CustomerAbout';
import CustomerCart from "./customer/CustomerCart";
import CustomerProfile from "./customer/CustomerProfile";
import AdminHome from "./admin/AdminHome";
import ViewCustomers from "./admin/ViewCustomers";
import ViewSellers from "./admin/ViewSellers";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <MainNavBar/> */}
        {/* <AdminNavBar/> */}
        <Routes>
          <Route path='/' element={<MainHome/>} exact/>
          <Route path='/mainhome' element={<MainHome/>} exact/>
          <Route path='/maincontact' element={<MainContact/>} exact/>
          <Route path='/mainabout' element={<MainAbout/>} exact/>
          <Route path='/customerregistration' element={<CustomerRegistration/>} exact/>
          <Route path='/customerlogin' element={<CustomerLogin/>} exact/>
          <Route path='/adminlogin' element={<AdminLogin/>} exact/>

          <Route path='/customerhome' element={<CustomerHome/>} exact/>
          <Route path='/customercontact' element={<CustomerContact/>} exact/>
          <Route path='/customerabout' element={<CustomerAbout/>} exact/>
          <Route path='/customercart' element={<CustomerCart/>} exact/>
          <Route path='/customerprofile' element={<CustomerProfile/>} exact/>

          <Route path='/adminhome' element={<AdminHome/>} exact/>
          <Route path='/viewcustomers' element={<ViewCustomers/>} exact/>
          <Route path='/viewsellers' element={<ViewSellers/>} exact/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
