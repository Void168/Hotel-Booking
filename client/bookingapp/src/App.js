import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import HotelScreen from './screens/HotelScreen'
import ListScreen from './screens/ListScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/hotels" element={<ListScreen />} />
        <Route path="/hotels/:id" element={<HotelScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
