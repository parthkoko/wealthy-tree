import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const HomeBannerSlider = () => {
  const navigate = useNavigate();

  return (
    <div className="banner-swiper absolute top-[107px] left-[86px] w-full max-w-5xl z-10">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="homebanner-detail text-white p-8">
            <h2 className="text-4xl font-bold mb-4">
              Grow Wealth.{" "}
              <span className="text-yellow-400">Fulfill Dreams.</span>
            </h2>
            <p className="mb-6">
              From Smart Investments to Secure Insurance and Trusted Tax
              Solutions — WEALTHY TREE is your all-in-one financial growth
              partner.
            </p>
            <button
              onClick={() => navigate("/contactus")}
              className="white-button "
            >
              Start Your Wealth Creation Journey
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="homebanner-detail banner-slidertext text-white w-[65%]">
            <p>"Retirement is not an age, it’s a financial number." </p>
            <p className="text-end">
              <span>– Robert Kiyosaki</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="homebanner-detail banner-slidertext text-white w-[65%]">
            <p>
              "In building a strong foundation, focus on value, not just price."{" "}
              <br />{" "}
            </p>
            <p className="text-end">
              <span>– Warren Buffett</span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="homebanner-detail banner-slidertext text-white w-[65%]">
            <p>
              "The biggest adventure you can take is to live the life of your
              dreams!" <br />{" "}
            </p>
            <p className="text-end">
              <span>– Oprah Winfrey</span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBannerSlider;
