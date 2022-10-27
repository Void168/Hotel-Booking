import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Header = ({ type }) => {
  return (
    <header
      className="bg-light-blue p-8"
      style={{
        backgroundImage: `url(
          'https://img.freepik.com/premium-photo/beautiful-panoramic-background-with-flying-plane-blue-sky-passenger-airplane-with-landing-gear-released-takes-off-sky-travel-concept_105428-4447.jpg?w=2000'
        )`,
      }}
    >
      <Navbar />
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer '
        }
      >
        <div className="headerList flex flex-column py-10 text-xl justify-between h-36 w-7/12">
          <div className="bg-[#4787EE] border-2 p-2 rounded-3xl border-white shadow-md text-white">
            <FontAwesomeIcon icon={faBed} /> <span>Chỗ ở</span>
          </div>
          <div className="bg-[#4787EE]  p-2 rounded-3xl shadow-md text-white">
            <FontAwesomeIcon icon={faPlane} /> <span>Chuyến bay</span>
          </div>
          <div className="bg-[#4787EE]  p-2 rounded-3xl shadow-md text-white">
            <FontAwesomeIcon icon={faCar} /> <span>Thuê xe</span>
          </div>
          <div className="bg-[#4787EE]  p-2 rounded-3xl shadow-md text-white">
            <FontAwesomeIcon icon={faBed} /> <span>Địa điểm thăm quan</span>
          </div>
          <div className="bg-[#4787EE]  p-2 rounded-3xl shadow-md text-white">
            <FontAwesomeIcon icon={faTaxi} /> <span>Taxi sân bay</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className="text-4xl font-bold text-white">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="text-2xl my-4">
              Nhận phần thưởng cho chuyến du lịch của bạn - tiết kiệm ngay từ
              10% với tài khoản Hotel booking miễn phí
            </p>
            <button className="px-4 py-4 bg-dark-light-yellow mx-2 my-8 shadow-md font-medium rounded-2xl">
              Đăng ký / Đăng nhập
            </button>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
