import Header from "../../component/Header";
import ErrorPageFour from "../../assets/404 Error-rafiki.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="pb-20">
      <div class="relative bg-[url('https://i.ibb.co.com/WvF3p36k/welison-franklin-1BcQAROQVXY-unsplash.jpg')] bg-cover bg-center">
        <div class="absolute inset-0 bg-black/20"></div>

        <div class="relative z-10">
          <div className="flex justify-center pt-5">
            <Header></Header>
          </div>
          <h1 className="pt-30 pb-50 text-[50px] font-[700] text-white text-end pr-36">
            Error 404
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <img className="w-[500px]" src={ErrorPageFour} alt="" />
      </div>
      <h1 className="text-[50px] font-[600] text-center text-[#031B4E]">
        Lost in Cyberspace: 404 Edition
      </h1>
      <p className="text-center mt-5 text-[16px] text-[#6F6F6F]">
        The page you are looking for was moved, removed, renamed or never
        existed.
      </p>
      <div className="flex justify-center mt-10">
        <Link to={"/"}>
          <button className="py-3 px-6 rounded-full font-[600] text-[18px] text-white bg-[#006D77]">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
