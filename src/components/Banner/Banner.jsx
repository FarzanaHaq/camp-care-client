import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ch = "hello";
  return (
    <div>
      <div className="max-w-6xl mx-auto my-16 relative">
        <Slider {...settings}>
          <div className="relative bg-cover bg-center bg-[url('https://i.ibb.co/zW0DRXSp/istockphoto-1326647797-612x612.jpg')]">
            {/* Black Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>

            {/* Banner Content */}
            <div className="relative z-20 py-32 space-y-4">
              <p className="text-center text-white text-3xl font-medium">
                “Bringing Healthcare to Remote Villages”
              </p>
              <p className="text-center text-white text-[18px]">
                In our last outreach camp in Rangamati, over 700+ villagers
                received free medical checkups, <br />
                vaccinations and health education. Lives were saved. Smiles were
                restored. <br />
                Let’s keep the mission alive.
              </p>
              <div className="flex justify-center">
                <button className="btn text-sky-400 font-bold shadow-none rounded-none mt-5">
                  Join Our Next Camp →
                </button>
              </div>
            </div>
          </div>
          <div className="relative bg-cover bg-center bg-[url('https://i.ibb.co/PshS4FHv/doctor-white-coat-holding-hand-young-child-dressed-pink-walking-down-colorful-hospital-hallway-33780.webp')]">
            {/* Black Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>

            {/* Banner Content */}
            <div className="relative z-20 py-32 space-y-4">
              <p className="text-center text-white text-3xl font-medium">
                “Little Rahim Walks Again”
              </p>
              <p className="text-center text-white text-[18px]">
                At our pediatric orthopedic camp, 8-year-old Rahim received a
                life-changing diagnosis and timely referral <br /> for surgery.
                His journey inspired the team and brought hope to many more.
              </p>
              <div className="flex justify-center">
                <button className="btn text-sky-400 font-bold shadow-none rounded-none mt-5">
                  Read More Success Stories →
                </button>
              </div>
            </div>
          </div>
          <div className="relative bg-cover bg-center bg-[url('https://i.ibb.co/rRnVwgmC/close-up-smiley-people-together-23-2149181997.jpg')]">
            {/* Black Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>

            {/* Banner Content */}
            <div className="relative z-20 py-32 space-y-4">
              <p className="text-center text-white text-3xl font-medium">
                “Powered by Passionate Volunteers”
              </p>
              <p className="text-center text-white text-[18px]">
                With the help of over 120 medical volunteers, our camps served
                1,500+ patients last month alone. <br /> Their dedication is
                what makes every camp possible.
              </p>
              <div className="flex justify-center">
                <button className="btn text-sky-400 font-bold shadow-none rounded-none mt-5">
                  Become a Volunteer →
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
