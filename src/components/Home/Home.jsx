import { About } from "../About/About";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import { FeedBack } from "../FeedBack/FeedBack";

import { GetInvolved } from "../GetInvolved/GetInvolved";
import Services from "../Services/Services";
import { ShowCamps } from "../ShowCamps/ShowCamps";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="bg-[#F2F4F7] back-primary overflow-hidden">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="w-6xl mx-auto">
        <Services></Services>
      </div>
      <ShowCamps></ShowCamps>
      <FeedBack></FeedBack>
      <About></About>
      <GetInvolved></GetInvolved>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
