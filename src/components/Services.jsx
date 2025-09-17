import { FaHeartPulse } from "react-icons/fa6";
import ServiceCard from "./cards/ServiceCard";

const Services = () => {
  return (
    <div className="px-5 max-w-6xl mx-auto mt-20">
      <div className="lg:flex lg:items-center">
        <div className="px-5 flex-1/2">
          <div className="text-[#006D77] letter-primary flex items-center gap-2">
            <FaHeartPulse></FaHeartPulse>
            <p className="uppercase font-[500] text-[18px]">Our Services</p>
          </div>
          <div className="font-[500] text-[22px] lg:text-[40px] text-[#031B4E] letter-primary">
            Our Healthcare Specialties
          </div>
        </div>
        <div className="text-[#6F6F6F] text-[18px] font-[500] border-l border-gray-300 lg:pl-15 w-[630px] hidden lg:block flex-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          industry. Borem Hpsum bas leen the industry’s standard dummy text ever
          since.
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 lg:mt-10">
        <ServiceCard
          image="https://i.ibb.co.com/5Xmqrhb5/Hearth.png"
          title="Cardiology"
          description="Lorem ipsum dolor sit amet conse ctetur adip scing."
        ></ServiceCard>
        <ServiceCard
          image="https://i.ibb.co.com/C5JLp509/3.png"
          title="Pulmonology"
          description="Lorem ipsum dolor sit amet conse ctetur adip scing."
        ></ServiceCard>
        <ServiceCard
          image="https://i.ibb.co.com/qMsPM7Rg/11.png"
          title=" Neurology"
          description="Lorem ipsum dolor sit amet conse ctetur adip scing."
        ></ServiceCard>
        <ServiceCard
          image="https://i.ibb.co.com/rGPznxM0/Fever.png"
          title=" Fever"
          description="Lorem ipsum dolor sit amet conse ctetur adip scing."
        ></ServiceCard>
        <ServiceCard
          image="https://i.ibb.co.com/SDL2WtXZ/Oncology.png"
          title="Oncology"
          description="Lorem ipsum dolor sit amet conse ctetur adip scing."
        ></ServiceCard>
        <ServiceCard
          image="https://i.ibb.co.com/V0L9mnSK/Infection.png"
          title="Infection"
          description="Lorem ipsum dolor sit amet conse ctetur adip scing."
        ></ServiceCard>
      </div>
    </div>
  );
};

export default Services;
