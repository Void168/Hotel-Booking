import Featured from '../components/Featured'
import FeaturedProps from '../components/FeaturedProps'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MailList from '../components/MailList'
import Navbar from '../components/Navbar'
import PropList from '../components/PropList'

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="m-8">
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
