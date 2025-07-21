import Banner from "../Banner/Banner"
import { FeedBack } from "../FeedBack/FeedBack"
import Footer from "../Footer/Footer"
import { GetInvolved } from "../GetInvolved/GetInvolved"
import { ShowCamps } from "../ShowCamps/ShowCamps"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShowCamps></ShowCamps>
      <FeedBack></FeedBack>
       <GetInvolved></GetInvolved>
      <Footer></Footer>
    </div>
  )
}

export default Home