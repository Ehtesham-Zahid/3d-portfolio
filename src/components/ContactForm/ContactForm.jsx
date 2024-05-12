import "./ContactForm.css";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import SendIcon from "@mui/icons-material/Send";

// import Send from "../../utils/Icons/send.png";
// import axios from "axios";
const ContactForm = () => {
  return (
    <div className="flex flex-col p-6 col-span-4 sm:col-span-2 lg:col-span-1 mx-auto sm:m-5  w-5/6 sm:w-full">
      <div className="flex flex-col my-5">
        <label className="text-cyan-400 text-lg">Name</label>
        <Input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          className="border-2 border-cyan-500 "
        />
      </div>
      <div className="flex flex-col my-5">
        <label className="text-cyan-400 text-lg">Email</label>
        <Input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          className="border-2 border-cyan-500"
        />
      </div>
      <div className="flex flex-col my-5">
        <label className="text-cyan-400 text-lg">Message</label>
        <Textarea
          placeholder="Enter Your Message"
          className="border-2 border-cyan-500"
        />
      </div>
      <div className="flex justify-center md:justify-start">
        <Button variant="primary">
          Send <SendIcon className=" ms-2" />
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
