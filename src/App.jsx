import { useEffect, useState } from 'react'
import {Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import Home from './Components/Home'
import Bulk_Upload from './Components/Bulk_Upload'

import './App.css'
import LoginModal from './Components/LoginModal'
import Cart from './Components/Cart'
import Wishlist from './Components/Wishlist'

function App() {

  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (user){
      alert(`You are now logged in as ${user.username}`)
    }
  }, [user])

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
            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          </Link>
          <Link to={user ? "/wishlist" : "/signin"} className="link-icons">
            <i className="fa-solid fa-heart fa-2xl"></i>
          </Link>
        </div>
      </div>
      <div className='main-body'>
        <Routes>
          <Route path="/" element={<Home user={user}></Home>}></Route>
          <Route path="/account" element={"User Account"}></Route>
          <Route path="/cart" element={<Cart user={user}></Cart>}></Route>
          <Route path="/wishlist" element={<Wishlist user={user}></Wishlist>}></Route>
          <Route path="/signin" element={<LoginModal setUser={setUser}></LoginModal>}></Route>
          <Route path="/admin/bulk-upload" element={<Bulk_Upload></Bulk_Upload>}></Route>
        </Routes>
      </div>   
    </>
  )
}

export default App
