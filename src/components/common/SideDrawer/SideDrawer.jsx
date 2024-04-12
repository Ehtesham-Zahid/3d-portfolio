import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Link,
  // Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const SideDrawer = () => {
  return (
    <Sheet>
      <div className="flex justify-end fixed right-3 top-3">
        <SheetTrigger>
          <MenuIcon className="text-purple-500 mt-1 " fontSize="large" />
        </SheetTrigger>
      </div>
      <SheetContent side="left">
        <SheetHeader>
          <ul className="flex flex-col justify-start items-start text-xl mt-2">
            <li className="my-2 font-semibold">
              <SheetClose asChild>
                <Link
                  // activeClass="active"
                  to="home-section"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  <HomeIcon className="me-2 text-purple-500" /> Home
                </Link>
              </SheetClose>
            </li>
            <li className="my-2  font-semibold">
              <SheetClose asChild>
                <Link
                  // activeClass="active"
                  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  <PersonIcon className="me-2 text-purple-500" /> About
                </Link>
              </SheetClose>
            </li>
            <li className="my-2  font-semibold">
              <SheetClose asChild>
                <Link
                  // activeClass="active"
                  to="services-section"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  <WorkIcon className="me-2 text-purple-500" /> Services
                </Link>
              </SheetClose>
            </li>
            <li className="my-2  font-semibold">
              <SheetClose asChild>
                <Link
                  // activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  <LocalPhoneIcon className="me-2 text-purple-500" /> Contact
                </Link>
              </SheetClose>
            </li>
            <span className="sr-only ">ddddddddddddddd</span>
          </ul>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideDrawer;
