import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="p-4">
      <div className="flex-row flex justify-between px-4 text-light-lime">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">Hotel Booking</span>
        </Link>

        <div>
          <button>Đăng ký</button>
          <button>Đăng nhập</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
