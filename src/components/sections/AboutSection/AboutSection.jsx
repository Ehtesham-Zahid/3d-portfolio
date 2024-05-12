// import "./AboutSection.css";
import { Button } from "@/components/ui/button";
import ProfileImage from "../../../assets/Images/Icons/profile5.jpg";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

const AboutSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return isMobile ? (
    <div className="h- w-full grid grid-cols-1 px-10" name="about-section">
      <div className="flex justify-center col-span-1 ">
        {/* <Fade direction="right"> */}
        <div className="w-80 h-80  flex justify-center  bg-white rounded-lg ms-5  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <img src={ProfileImage} className="w-80  rounded-lg " />
        </div>
        {/* </Fade> */}
      </div>
      <div className=" text-white col-span-1 flex justify-center flex-col items-center">
        <p className="text-cyan-400 text-lg font-semibold mb-12 mt-6">
          Hello, Welcome!
        </p>
        <p className="text-white text-4xl md:text-5xl font-bold mb-8">
          I am Jurgen Halt
        </p>
        <p className="text-gray-600 text-lg w-full sm:w-3/4 font-semibold text-center">
          Our seasoned consultants offer comprehensive strategic guidance,
          ensuring your business is equipped to tackle. Our seasoned consultants
          offer comprehensive strategic guidance, ensuring your business is
          equipped to tackle
        </p>
        <div className="my-10">
          <Button variant="primary">Contact Now</Button>
        </div>
        {/* <p className="text-3xl md:text-4xl text-center mb-5 mt-2 font-bold">
          LET ME <span className="text-cyan-400">INTRODUCE</span> MYSELF
        </p>
        <p className="text-lg md:text-xl my-4 md:tracking-wide md:leading-8  font-medium text-white">
          Our seasoned consultants offer comprehensive strategic guidance,
          ensuring your business is equipped to tackle{" "}
          <span className="text-cyan-400">challenges and seize </span>
          opportunities effectively.
        </p>
        <p className="text-lg md:text-xl my-4 md:tracking-wide md:leading-8  font-medium text-white">
          Recognizing the uniqueness of each business, we provide customized
          solutions that address your specific needs and aspirations. From{" "}
          <span className="text-cyan-400">
            startups to established enterprises
          </span>
          , our approach is personalized to fuel your growth journey.
        </p>
        <p className="text-lg md:text-xl my-4 md:tracking-wide md:leading-8  font-medium text-white">
          With a diverse team boasting experience across various sectors, we
          bring versatile insights to the table. Whether you operate in
          <span className="text-cyan-400">
            {" "}
            technology, finance, healthcare, or retail,
          </span>{" "}
          our expertise spans industries to deliver tailored solutions.
        </p>

        <p className="text-lg md:text-xl my-4 md:tracking-wide md:leading-8  font-medium text-white">
          Our commitment to your success doesn't end with the implementation of
          solutions. We provide{" "}
          <span className="text-cyan-400">ongoing support and guidance</span> to
          ensure that your business continues to thrive in a rapidly evolving
          market.
        </p> */}
      </div>
    </div>
  ) : (
    <div
      className="w-full grid grid-cols-2 px-32 xl:px-44 2xl:px-64 my-28 "
      name="about-section"
    >
      <div className="col-span-1 flex flex-col justify-start">
        <p className="text-cyan-400 text-lg font-semibold mb-12 mt-6">
          Hello, Welcome!
        </p>
        <p className="text-white text-5xl font-bold mb-8">I am Jurgen Halt</p>
        <p className="text-gray-600 text-lg w-5/6 font-semibold ">
          Our seasoned consultants offer comprehensive strategic guidance,
          ensuring your business is equipped to tackle. Our seasoned consultants
          offer comprehensive strategic guidance, ensuring your business is
          equipped to tackle
        </p>
        <div className="my-10">
          <Button variant="primary">Contact Now</Button>
        </div>
      </div>
      <div className="flex justify-end col-span-1 ">
        {/* <Fade direction="right"> */}
        <div className="w-96 h-5/6  flex justify-center      rounded-lg ms-5  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <img src={ProfileImage} className="w-96 rounded-lg " />
        </div>
        {/* </Fade> */}
      </div>
    </div>
    // <div className="h- w-full grid grid-cols-3 px-10" name="about-section">
    //   <div className="  col-span-2 text-white">
    //     <p className="text-4xl text-center mb-5 font-bold">
    //       LET ME <span className="text-cyan-400">INTRODUCE</span> MYSELF
    //     </p>
    //     <p className="text-xl my-4 tracking-wide leading-8 font-medium text-white">
    // Our seasoned consultants offer comprehensive strategic guidance,
    // ensuring your business is equipped to tackle{" "}
    // <span className="text-cyan-400">challenges and seize </span>
    // opportunities effectively.
    //     </p>
    //     <p className="text-xl my-4 tracking-wide leading-8 font-medium text-white">
    //       Recognizing the uniqueness of each business, we provide customized
    //       solutions that address your specific needs and aspirations. From{" "}
    //       <span className="text-cyan-400">
    //         startups to established enterprises
    //       </span>
    //       , our approach is personalized to fuel your growth journey.
    //     </p>
    //     <p className="text-xl my-4 tracking-wide leading-8 font-medium text-white">
    //       With a diverse team boasting experience across various sectors, we
    //       bring versatile insights to the table. Whether you operate in
    //       <span className="text-cyan-400">
    //         {" "}
    //         technology, finance, healthcare, or retail,
    //       </span>{" "}
    //       our expertise spans industries to deliver tailored solutions.
    //     </p>

    //     <p className="text-xl my-4 tracking-wide leading-8 font-medium text-white">
    //       Our commitment to your success doesn't end with the implementation of
    //       solutions. We provide{" "}
    //       <span className="text-cyan-400">ongoing support and guidance</span> to
    //       ensure that your business continues to thrive in a rapidly evolving
    //       market.
    //     </p>
    //   </div>
    // <div className="flex justify-center ">
    //   {/* <Fade direction="right"> */}
    //   <div className="w-80 h-80 flex justify-center border-8 border-cyan-400 bg-white rounded-full ms-5  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
    //     <img src={ProfileImage} className="w-80 rounded-full " />
    //   </div>
    //   {/* </Fade> */}
    // </div>
    // </div>
  );
};

export default AboutSection;
