import Banner from "../Banner/Banner";
import { FeedBack } from "../FeedBack/FeedBack";
import Footer from "../Footer/Footer";
import { GetInvolved } from "../GetInvolved/GetInvolved";
import { ShowCamps } from "../ShowCamps/ShowCamps";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <ShowCamps></ShowCamps>
      <FeedBack></FeedBack>
      <GetInvolved></GetInvolved>
      <Footer></Footer>
    </div>
  );
};

export default Home;
