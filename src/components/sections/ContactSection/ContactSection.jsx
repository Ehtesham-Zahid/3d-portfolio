// import ContactAnimation from "../../ContactAnimation/ContactAnimation";
// import ContactDetails from "../../ContactDetails/ContactDetails";
// import ContactForm from "../../ContactForm/ContactForm";

import ContactDetails from "@/components/ContactDetails/ContactDetails";
import ContactForm from "@/components/ContactForm/ContactForm";
import Animation from "@/components/common/Animation/Animation";

import ContactLottie from "../../../assets/Lotties/contact-lottie.json";
import { Fade } from "react-awesome-reveal";

const ContactSection = () => {
  return (
    <div id="Contact" className="my-20" name="contact-section">
      <p className="text-purple-600 font-black text-center text-5xl  mt-20 sm:mb-10">
        Contact Me
      </p>
      <div className="grid grid-cols-4 lg:grid-cols-3  gap-4 ">
        <ContactForm />
        <ContactDetails />
        {/* <Fade direction="right"> */}
        <div className="col-span-4 lg:col-span-1 flex justify-center sm:px-20 md:px-44 lg:px-0 ">
          <Animation lottie={ContactLottie} />
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default ContactSection;
