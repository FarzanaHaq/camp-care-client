import { About } from "../About/About";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import { FeedBack } from "../FeedBack/FeedBack";
import Footer from "../Footer/Footer";
import { GetInvolved } from "../GetInvolved/GetInvolved";
import { ShowCamps } from "../ShowCamps/ShowCamps";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div className="bg-[#F2F4F7]">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <ShowCamps></ShowCamps>
      <FeedBack></FeedBack>
      <About></About>
      <GetInvolved></GetInvolved>
      <Doctors></Doctors>
      <Footer></Footer>
    </div>
  );
};

export default Home;
