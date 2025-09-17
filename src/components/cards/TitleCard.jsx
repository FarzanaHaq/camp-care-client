import { FaHeartPulse } from "react-icons/fa6";

export const TitleCard = ({intro, title, description }) => {
  return (
    <div>
      <div className=" flex justify-center items-center mt-15 lg:mt-25 gap-3 text-[#006D77] letter-primary">
        <FaHeartPulse></FaHeartPulse>
        <h1 className="font-[500] mt-0.5 text-[18px] uppercase">{intro}</h1>
      </div>
      <h1 className="text-center text-[20px] lg:text-[40px] font-[500] text-[#031B4E] my-3 letter-primary">
        {title}
      </h1>
      <p className="text-center text-[18px] text-[#6F6F6F]  max-w-[650px] mx-auto px-5">
        {description}
      </p>
    </div>
  );
};
