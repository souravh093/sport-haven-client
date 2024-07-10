import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        effect="fade"
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative h-[calc(100vh-64px)] w-full"
            style={{
              backgroundImage: `url(${slider1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-white text-7xl mb-4 font-black uppercase animate__animated animate__fadeInDown">
                Gear Up for Victory!
              </h1>
              <p className="text-white text-xl mb-4 animate__animated animate__fadeInLeft">
                Get the Best Sports Equipment at Unbeatable Prices.
              </p>
              <h2 className="text-white text-4xl mb-4 font-black uppercase max-w-4xl animate__animated animate__fadeInRight">
                Exclusive Summer Sale: Up to{" "}
                <span className="bg-red-500 px-2 py-1 rounded">50%</span> Off on
                Selected Items!
              </h2>
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded animate__animated animate__fadeInUp">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[calc(100vh-64px)] w-full"
            style={{
              backgroundImage: `url(${slider2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-white text-7xl mb-4 font-black uppercase animate__animated animate__fadeInDown">
                Ready for the Next Match?
              </h1>
              <p className="text-white text-xl mb-4 animate__animated animate__fadeInLeft">
                Premium Sports Gear for Every Athlete.
              </p>
              <h2 className="text-white text-4xl mb-4 font-black uppercase max-w-4xl animate__animated animate__fadeInRight">
                New Arrivals: Up to{" "}
                <span className="bg-red-500 px-2 py-1 rounded">30%</span> Off!
              </h2>
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded animate__animated animate__fadeInUp">
                Discover Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[calc(100vh-64px)] w-full"
            style={{
              backgroundImage: `url(${slider3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-white text-7xl mb-4 font-black uppercase animate__animated animate__fadeInDown">
                Champion's Choice!
              </h1>
              <p className="text-white text-xl mb-4 animate__animated animate__fadeInLeft">
                Equip Yourself with Top-notch Gear.
              </p>
              <h2 className="text-white text-4xl mb-4 font-black uppercase max-w-4xl animate__animated animate__fadeInRight">
                Limited Time Offer: Save Up to{" "}
                <span className="bg-red-500 px-2 py-1 rounded">40%</span>!
              </h2>
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded animate__animated animate__fadeInUp">
                Buy Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

export default Banner;
