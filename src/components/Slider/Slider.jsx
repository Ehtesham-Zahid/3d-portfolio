// Import Swiper React components
import ProfileImage from "../../assets/Images/profile.jpg";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
  Mousewheel,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Slider.css";
import { Button } from "../ui/button";
import { Link } from "react-scroll";

const Slider = () => {
  return (
    <div className="text-white">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
          Mousewheel,
        ]}
        effect="fade"
        // spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay
        // mousewheel
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="h-full"
      >
        <SwiperSlide className=" slider1  flex flex-col justify-center pt-28 ps-20">
          {/* <img src={ProfileImage} className="" /> */}
          <p className="text-white text-5xl text-start font-bold mb-14">
            Strategic Planning
          </p>
          <p className="text-xl font-medium text-gray-800 mb-14 w-96">
            Strategic planning is the cornerstone of long-term success for any
            organization. By aligning business objectives with market
            opportunities and internal capabilities, strategic planning enables
            companies to chart a clear path toward their desired future state.
          </p>
          <div className="cursor-pointer mb-14">
            <Button variant="secondary" size="lg">
              Contact Now
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" slider2 opa flex flex-col justify-center items pt-28 ps-20">
          {/* <img src={ProfileImage} className="" /> */}
          <div>
            <p className="text-white text-5xl text-start font-bold mb-14">
              Financial Management
            </p>
            <p className="text-xl text-start font-medium text-gray-800 mb-14 w-96">
              Strategic planning is the cornerstone of long-term success for any
              organization. By aligning business objectives with market
              opportunities and internal capabilities, strategic planning
              enables companies to chart a clear path toward their desired
              future state.
            </p>
            <div className="cursor-pointer mb-14">
              <Button variant="secondary" size="lg">
                <Link
                  // activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={500}
                  // onSetActive={handleSetActive}
                  // className="hover:text-cyan-400 hover:border-b-4 border-purple-400 cursor-pointer  "
                >
                  Contact Now
                </Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className=" slider3  flex flex-col justify-center pt-28 ps-20">
          {/* <img src={ProfileImage} className="" /> */}
          <p className="text-white text-5xl  text-start font-bold mb-14">
            Market Research and Analysis
          </p>
          <p className="text-xl font-medium text-white mb-14 w-96">
            Strategic planning is the cornerstone of long-term success for any
            organization. By aligning business objectives with market
            opportunities and internal capabilities, strategic planning enables
            companies to chart a clear path toward their desired future state.
          </p>
          <div className="cursor-pointer mb-14">
            <Button variant="secondary" size="lg">
              Contact Now
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
