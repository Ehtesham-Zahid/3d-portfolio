import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import AiLottie from "../../../assets/Lotties/ai-4-lottie.json";
import { Button } from "@/components/ui/button";
import Animation from "@/components/common/Animation/Animation";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

const AiSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full p-5">
      <div className=" sm:p-20">
        <Animation lottie={AiLottie} />
      </div>
      <div className="col-span-1 flex items-center  justify-center flex-col">
        <div className="grid  w-full sm:w-3/4 items-center gap-1.5 px-3">
          {/* <Label htmlFor="email">Enter Your Prompt</Label> */}
          <p className="text-3xl font-bold text-center text-white mb-10">
            Enter Your <span className="text-cyan-400">Prompt</span>
          </p>
          <Input
            type="email"
            id="email"
            placeholder="Prompt"
            className="border-2 border-cyan-400"
          />
        </div>
        <div className="flex justify-end my-5 w-full sm:w-3/4 px-3">
          <Button variant="primary" size="lg">
            Submit
          </Button>
        </div>
      </div>
      {/* <div> */}
      {/* <img src={HandImage} className=" rounded-xl " /> */}
      {/* <Fade direction="right"> */}
      {/* </Fade> */}
      {/* </div> */}
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full p-5">
      <div className="col-span-1 flex items-center  justify-center flex-col">
        <div className="grid   md:w-4/5 items-center gap-1.5">
          {/* <Label htmlFor="email">Enter Your Prompt</Label> */}
          <p className="text-4xl font-bold text-center text-white my-24">
            Enter Your <span className="text-cyan-500">Prompt</span>
          </p>
          <Input
            type="email"
            id="email"
            placeholder="Prompt"
            className="border-2 border-cyan-400"
          />
        </div>
        <div className="flex justify-end my-5  md:w-4/5">
          <Button variant="primary" size="lg">
            Submit
          </Button>
        </div>
      </div>
      {/* <div> */}
      {/* <img src={HandImage} className=" rounded-xl " /> */}
      {/* <Fade direction="right"> */}
      <div className="lg:p-8 xl:p-20">
        <Animation lottie={AiLottie} />
      </div>
      {/* </Fade> */}
      {/* </div> */}
    </div>
  );
};

export default AiSection;
