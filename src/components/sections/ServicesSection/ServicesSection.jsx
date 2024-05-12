import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-scroll";

const ServicesSection = () => {
  return (
    <div name="services-section">
      <p className="text-cyan-400 font-black text-center text-4xl sm:text-5xl  sm:mb-10">
        My Services
      </p>
      <div className=" slider1  flex flex-col justify-center  ps-4 sm:ps-20 h py-12 my-12">
        {/* <img src={ProfileImage} className="" /> */}
        <p className="text-white text-4xl sm:text-5xl text-start font-bold mb-8">
          Strategic Planning
        </p>
        <p className="text-xl font-medium text-white mb-8 w-5/6 sm:w-1/2">
          Strategic planning is the cornerstone of long-term success for any
          organization. By aligning business objectives with market
          opportunities and internal capabilities, strategic planning enables
          companies to chart a clear path toward their desired future state.
        </p>
        <div className="cursor-pointer mb-4">
          <Button variant="secondary" size="lg">
            <Link
              // activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact Now
            </Link>
          </Button>
        </div>
      </div>
      <div className=" slider2 flex flex-col justify-center ps-4 sm:ps-20 py-12 my-12">
        {/* <img src={ProfileImage} className="" /> */}
        <div>
          <p className="text-white text-4xl sm:text-5xl text-start font-bold mb-8">
            Financial Management
          </p>
          <p className="text-xl font-medium text-white mb-8  w-5/6 sm:w-1/2">
            Strategic planning is the cornerstone of long-term success for any
            organization. By aligning business objectives with market
            opportunities and internal capabilities, strategic planning enables
            companies to chart a clear path toward their desired future state.
          </p>
          <div className="cursor-pointer mb-8">
            <Button variant="secondary" size="lg">
              <Link
                // activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact Now
              </Link>
            </Button>
          </div>
        </div>
      </div>{" "}
      <div className=" slider3  flex flex-col justify-center  ps-4 sm:ps-20 py-12 my-12">
        {/* <img src={ProfileImage} className="" /> */}
        <p className="text-white text-4xl sm:text-5xl  text-start font-bold mb-8">
          Market Research and Analysis
        </p>
        <p className="text-xl font-medium text-white mb-8  w-5/6 sm:w-1/2">
          Strategic planning is the cornerstone of long-term success for any
          organization. By aligning business objectives with market
          opportunities and internal capabilities, strategic planning enables
          companies to chart a clear path toward their desired future state.
        </p>
        <div className="cursor-pointer mb-8">
          <Button variant="secondary" size="lg">
            <Link
              // activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
