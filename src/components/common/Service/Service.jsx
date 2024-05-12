import { Button } from "@/components/ui/button";

import { Link } from "react-scroll";

const Service = (props) => {
  return (
    <>
      {" "}
      <div
        className={` ${props.imageClass}   flex flex-col justify-center  ps-4 sm:ps-20  py-6 my-12`}
      >
        {/* <img src={ProfileImage} className="" /> */}
        <p className="text-white text-4xl sm:text-5xl text-start font-bold mb-8">
          {props.title}
        </p>
        <p className="text-xl font-medium text-white mb-8 w-5/6 sm:w-1/2">
          {props.desc}
        </p>
        <div className="cursor-pointer mb-4">
          <Button variant="primary" size="lg">
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
    </>
  );
};

export default Service;
