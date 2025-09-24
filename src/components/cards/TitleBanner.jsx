import Header from "../Header";

const TitleBanner = ({text}) => {
  return (
    <div class="relative bg-[url('https://i.ibb.co.com/WvF3p36k/welison-franklin-1BcQAROQVXY-unsplash.jpg')] bg-cover bg-center">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative z-10">
        <div className="flex justify-center pt-5">
          <Header></Header>
        </div>
        <h1 className="pt-15 pb-10  lg:pt-30 lg:pb-50 text-[22px] lg:text-[50px] font-[700] text-white text-end pr-5 lg:pr-36">
         {text}
        </h1>
      </div>
    </div>
  );
};

export default TitleBanner;
