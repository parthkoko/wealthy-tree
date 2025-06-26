import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import mainhomebanner from "../assets/images/main-home-banner.png";
import finalbanner from "../assets/images/finalbanner.png";
import robort from "../assets/images/robort.svg";
import warren from "../assets/images/warren.svg";
import oprah from "../assets/images/oprah.svg";

const HomeBannerSlider = () => {
  const navigate = useNavigate();

  return (
    <div className="banner-swiper absolute top-[0px] left-0 right-0 w-full ">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {/* Slide 1 */}
      <SwiperSlide>
  <div className="relative w-full h-[600px]">
    {/* Background Image */}
    <img
      className="w-full h-full object-cover"
      src={finalbanner}
      alt="finalbanner"
    />

    {/* Overlay Text */}
     <div className="homebanner-detail text-white absolute top-[107px] left-[3%] right-[3%] w-[90%] max-w-5xl z-10 ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Grow Wealth.{" "}
              <span className="text-yellow-400">Fulfill Dreams.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              From Smart Investments to Secure Insurance and Trusted Tax
              Solutions — WEALTHY TREE is your all-in-one financial growth
              partner.
            </p>
            <button
              onClick={() => navigate("/contactus")}
              className="white-button text-sm sm:text-base"
            >
              Start Your Wealth Creation Journey
            </button>
          </div>
  </div>
</SwiperSlide>


        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative main-home-banner w-full ">
          <img
      className="w-full h-[600px] object-cover "
      src={robort}
      alt="robort"
    />
          <div className="homebanner-detail banner-slidertext absolute top-[107px] left-[3%] right-[3%]  text-white w-full sm:w-[70%] md:w-[65%]">
            <p className="text-base sm:text-lg md:text-xl">
              "Retirement is not an age, it’s a financial number."
            </p>
            <p className="text-end mt-2 text-sm sm:text-base">
              <span>– Robert Kiyosaki</span>
            </p>
          </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
      
        <SwiperSlide>
                <div className="relative w-full h-[600px]">
          <img
      className="w-full h-full object-cover"
      src={warren}
      alt="warren"
    />
          <div className="homebanner-detail banner-slidertext absolute top-[107px] left-[3%] right-[3%]  text-white w-full sm:w-[70%] md:w-[65%] ">
            <p className="text-base sm:text-lg md:text-xl">
              "In building a strong foundation, focus on value, not just price."
            </p>
            <p className="text-end mt-2 text-sm sm:text-base">
              <span>– Warren Buffett</span>
            </p>
          </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
     
        
        <SwiperSlide>
                <div className="relative w-full h-[600px]">
          <img
      className="w-full h-full object-cover"
      src={oprah}
      alt="oprah"
    />
          <div className="homebanner-detail banner-slidertext absolute top-[107px] left-[3%] right-[3%]  text-white w-full sm:w-[70%] md:w-[65%] ">
            <p className="text-base sm:text-lg md:text-xl">
              "The biggest adventure you can take is to live the life of your
              dreams!"
            </p>
            <p className="text-end mt-2 text-sm sm:text-base">
              <span>– Oprah Winfrey</span>
            </p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBannerSlider;
