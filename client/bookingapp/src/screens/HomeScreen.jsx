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
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProps />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default HomeScreen
