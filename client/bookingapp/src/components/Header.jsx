import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({ type }) => {
  const [destination, setDestination] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } })
  }

  return (
    <header className="bg-light-blue p-8">
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
            <div className="flex justify-center">
              <div className="mt-4 mx-10 flex flex-row justify-evenly border-4 border-light-yellow bg-white w-10/12 shadow-md p-2 rounded-lg">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />{' '}
                  <input
                    type="text"
                    placeholder="Bạn muốn đến đâu?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, 'MM/dd/yyyy')} đến ${format(
                    date[0].endDate,
                    'MM/dd/yyyy',
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >{`${options.adult} Người lớn · ${options.children} trẻ em · ${options.room} phòng`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption('adult', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption('adult', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption('children', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption('children', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption('room', 'd')}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption('room', 'i')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
