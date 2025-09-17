import Banner from "../components/Banner";
import { About } from "../components/About";
import Doctors from "../components/Doctors";
import { FeedBack } from "../components/FeedBack";
import { GetInvolved } from "../components/GetInvolved";
import { ShowCamps } from "../components/ShowCamps";
import { Helmet } from "react-helmet";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="bg-[#F2F4F7] back-primary overflow-hidden">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <ShowCamps></ShowCamps>
      <FeedBack></FeedBack>
      <About></About>
      <GetInvolved></GetInvolved>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
