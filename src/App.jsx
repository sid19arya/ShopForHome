import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Home'
import Bulk_Upload from './Components/Bulk_Upload'

import './App.css'

function App() {

  const [user, setUser] = useState(true);

  return (
    <>
      <div className='header'>
        <div className="header-left">
          <Link to="/" className="link-icons">
            <i className="fa-solid fa-house fa-2xl" ></i>
          </Link>
        </div>
        <div className="header-middle">
          == Shop For Home ==
        </div>
        <div className="header-right">
          <Link to={user ? "/account" : "/signin"} className="link-icons">
            <i className="fa-solid fa-user fa-2xl"></i>
          </Link>
          <Link to={user ? "/cart" : "/signin"} className="link-icons">
            <i className="fa-solid fa-heart fa-2xl"></i>
          </Link>
          <Link to={user ? "/wishlist" : "/signin"} className="link-icons">
            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          </Link>
        </div>
      </div>
      <div className='main-body'>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/account" element={"User Account"}></Route>
          <Route path="/cart" element={"Cart"}></Route>
          <Route path="/wishlist" element={"Wishlist"}></Route>
          <Route path="/signin" element={"SIGNINPAGE"}></Route>
          <Route path="/admin/bulk-upload" element={<Bulk_Upload></Bulk_Upload>}></Route>
        </Routes>
      </div>   
    </>
  )
}

export default App
