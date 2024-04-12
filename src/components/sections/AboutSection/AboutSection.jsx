// import "./AboutSection.css";
import ProfileImage from "../../../assets/Images/profile.jpg";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

const AboutSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return isMobile ? (
    <div className="h- w-full grid grid-cols-1 px-10" name="about-section">
      <div className="flex justify-center col-span-1 ">
        {/* <Fade direction="right"> */}
        <div className="w-64 h-64 md:w-80 md:h-80 flex justify-center border-8 border-purple-500 bg-white rounded-full ms-5  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <img src={ProfileImage} className="w-64 md:w-80 rounded-full " />
        </div>
        {/* </Fade> */}
      </div>
      <div className=" text-black col-span-1">
        <p className="text-3xl md:text-4xl text-center mb-5 mt-2 font-bold">
          LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
        </p>
        <p className="text-lg md:text-xl my-4 md:tracking-wide md:leading-8  font-medium text-black">
          Our seasoned consultants offer comprehensive strategic guidance,
          ensuring your business is equipped to tackle{" "}
          <span className="text-purple-500">challenges and seize </span>
          opportunities effectively.
        </p>
        <p className="text-lg md:text-xl my-4 md:tracking-wide md:leading-8  font-medium text-black">
          Recognizing the uniqueness of each business, we provide customized
          solutions that address your specific needs and aspirations. From{" "}
          <span className="text-purple-500">
            startups to established enterprises
          </span>
          , our approach is personalized to fuel your growth journey.
        </p>
        <p className="text-lg md:text-xl my-4 md:tracking-wide md:leading-8  font-medium text-black">
          With a diverse team boasting experience across various sectors, we
          bring versatile insights to the table. Whether you operate in
          <span className="text-purple-500">
            {" "}
            technology, finance, healthcare, or retail,
          </span>{" "}
          our expertise spans industries to deliver tailored solutions.
        </p>

        <p className="text-lg md:text-xl my-4 md:tracking-wide md:leading-8  font-medium text-black">
          Our commitment to your success doesn't end with the implementation of
          solutions. We provide{" "}
          <span className="text-purple-500">ongoing support and guidance</span>{" "}
          to ensure that your business continues to thrive in a rapidly evolving
          market.
        </p>
      </div>
    </div>
  ) : (
    <div className="h- w-full grid grid-cols-3 px-10" name="about-section">
      <div className="  col-span-2 text-black">
        <p className="text-4xl text-center mb-5 font-bold">
          LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
        </p>
        <p className="text-xl my-4 tracking-wide leading-8 font-medium text-black">
          Our seasoned consultants offer comprehensive strategic guidance,
          ensuring your business is equipped to tackle{" "}
          <span className="text-purple-500">challenges and seize </span>
          opportunities effectively.
        </p>
        <p className="text-xl my-4 tracking-wide leading-8 font-medium text-black">
          Recognizing the uniqueness of each business, we provide customized
          solutions that address your specific needs and aspirations. From{" "}
          <span className="text-purple-500">
            startups to established enterprises
          </span>
          , our approach is personalized to fuel your growth journey.
        </p>
        <p className="text-xl my-4 tracking-wide leading-8 font-medium text-black">
          With a diverse team boasting experience across various sectors, we
          bring versatile insights to the table. Whether you operate in
          <span className="text-purple-500">
            {" "}
            technology, finance, healthcare, or retail,
          </span>{" "}
          our expertise spans industries to deliver tailored solutions.
        </p>

        <p className="text-xl my-4 tracking-wide leading-8 font-medium text-black">
          Our commitment to your success doesn't end with the implementation of
          solutions. We provide{" "}
          <span className="text-purple-500">ongoing support and guidance</span>{" "}
          to ensure that your business continues to thrive in a rapidly evolving
          market.
        </p>
      </div>
      <div className="flex justify-center ">
        <Fade direction="right">
          <div className="w-80 h-80 flex justify-center border-8 border-purple-500 bg-white rounded-full ms-5  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <img src={ProfileImage} className="w-80 rounded-full " />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutSection;
