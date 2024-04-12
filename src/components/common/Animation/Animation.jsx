/* eslint-disable react/prop-types */
import { Player } from "@lottiefiles/react-lottie-player";

const Animation = (props) => {
  return (
    <div className="  flex col-span-1 ">
      <Player autoplay loop src={props.lottie}></Player>
    </div>
  );
};

export default Animation;
