import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../components/SearchItem'

const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  console.log(location)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container mx-auto mt-8 px-4">
        <div className="flex justify-center">
          <div className="bg-light-blue h-2/5 p-4 rounded-lg mr-8">
            <h1 className="text-3xl font-bold">Tìm kiếm</h1>
            <div className="lsItem my-2">
              <label>Điểm đến</label>
              <br />
              <input
                placeholder={destination}
                type="text"
                className="w-full my-2"
              />
            </div>
            <div className="lsItem my-2 flex flex-col">
              <label>Ngày tới</label>
              <span
                className="bg-white my-2 py-1 text-center rounded-md "
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, 'MM/dd/yyyy')} đến ${format(
                date[0].endDate,
                'MM/dd/yyyy',
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Các lựa chọn</label>
              <div className="lsOptions">
                <div className="lsOptionItem my-2">
                  <span className="lsOptionText my-2">
                    Giá từ <small>(1 đêm)</small>
                  </span>
                  <input type="number" className="w-full" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText my-2">
                    Đến <small>(1 đêm)</small>
                  </span>
                  <input type="number" className="w-full" />
                </div>
                <div className="lsOptionItem my-2 flex justify-between">
                  <label className="lsOptionText py-2">Người lớn</label>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput my-2 px-2 w-3/12"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem flex justify-between">
                  <label className="lsOptionText py-2">Trẻ em</label>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput my-2 px-2 w-3/12"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem my-2 flex justify-between">
                  <label className="lsOptionText py-2">Phòng</label>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput my-2 px-2 w-3/12"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="w-11/12">Tìm kiếm</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
