import Featured from '../components/Featured'
import FeaturedProps from '../components/FeaturedProps'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MailList from '../components/MailList'
import Navbar from '../components/Navbar'
import PropList from '../components/PropList'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
  return (
    <div>
      <Header />

      <div className="mt-16 mx-8">
        <SearchBar />
        <Featured />
        <PropList />
        <FeaturedProps />
      </div>
      <div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default HomeScreen
