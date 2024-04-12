import ServiceImage from "../../assets/Images/Slider/slider-6.jpg";
import { Button } from "../ui/button";
const ServiceCard = () => {
  return (
    <div className="my-12">
      <div className=" slider1  flex flex-col justify-center  ps-20 h py-12 ">
        {/* <img src={ProfileImage} className="" /> */}
        <p className="text-white text-5xl text-start font-bold mb-8">
          Strategic Planning
        </p>
        <p className="text-xl font-medium text-white mb-8 w-1/2">
          Strategic planning is the cornerstone of long-term success for any
          organization. By aligning business objectives with market
          opportunities and internal capabilities, strategic planning enables
          companies to chart a clear path toward their desired future state.
        </p>
        <div className="cursor-pointer mb-4">
          <Button variant="secondary" size="lg">
            Contact Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
