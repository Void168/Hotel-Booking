import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-light-blue p-4">
      <div className="flex-row flex justify-between px-4 text-light-lime">
        <span className="block">Hotel Booking</span>
        <div>
          <button>Đăng ký</button>
          <button>Đăng nhập</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
