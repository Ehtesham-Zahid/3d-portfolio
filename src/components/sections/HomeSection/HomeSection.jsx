import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";

import Spline from "@splinetool/react-spline";
// import Scene from "@/components/SplineScene/SplineScene";

const HomeSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <div
      className="w-screen h-screen flex justify-center lg:items-center md:pt-20 lg:pt-0 "
      name="home-section"
    >
      {/* <div className="grid grid-cols-2 pt-44">
        <div className="col-span-1 flex flex-col justify-center items-center">
          <p className="text-white font-medium text-3xl">
            Hi, My name is{" "}
            <strong className="text-cyan-400 animate-bounce">
              Jürgen Halt
            </strong>
          </p>
          <p className="text-cyan-400 text-3xl font-bold mt-5 ">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Business Consultant",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Business Advisor",
                1000,
                "Business Broker",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Spline
            scene="https://prod.spline.design/slOF-fMS9Zc0bFBi/scene.splinecode"
            // className=""
          />
          {/* <p className="text-3xl text-white font-bold">
            Animation Will Come HERE
          </p> */}
      {/* </div> */}
      {/* // </div> */}
      <div className="w-full lg:w-fit">
        {/* <Spline scene="https://prod.spline.design/FxcPWLFLcXyC2aJV/scene.splinecode" /> */}
        {isMobile ? (
          <Spline scene="https://prod.spline.design/FwhrUDgY1Cq7asj6/scene.splinecode" />
        ) : (
          <Spline scene="https://prod.spline.design/FxcPWLFLcXyC2aJV/scene.splinecode" />
        )}
      </div>
      {/* <Scene /> */}
    </div>
  );
};

export default HomeSection;
// https://prod.spline.design/1UBB4dpVhQiQ-2S0/scene.splinecode
