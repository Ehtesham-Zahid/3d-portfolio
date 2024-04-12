// import SocialDetails from "../SocialDetails/SocialDetails";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const ContactDetails = () => {
  return (
    <div className=" col-span-4 sm:col-span-2 lg:col-span-1 sm:my-20 mx-auto">
      <div className="flex my-8 ">
        {/* <img
          src={EmailImage}
          className="w-10 rounded-full m-3 bg-red-500 p-1 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        /> */}
        <EmailIcon className="text-purple-500 " fontSize="medium" />
        <p className="text-black mx-2  text-lg truncate">
          ehteshamzahid313@gmail.com
        </p>
      </div>
      <div className="flex my-8">
        {/* <img
          src={TelephoneImage}
          className="w-10 rounded-full m-3 bg-red-500 p-1 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        /> */}
        <CallIcon className="text-purple-500 " fontSize="medium" />
        <p className="text-black mx-2  text-lg">+92 3080554483</p>
      </div>
      <div className="flex my-8">
        {/* <img
          src={LocationImage}
          className="w-10 rounded-full m-3 bg-purple-500 p-1 transition ease-in   hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        /> */}
        <LocationOnIcon className="text-purple-500 " fontSize="medium" />
        <p className="text-black mx-2 text-lg">Lahore, Pakistan</p>
      </div>
      {/* <SocialDetails /> */}
    </div>
  );
};

export default ContactDetails;
