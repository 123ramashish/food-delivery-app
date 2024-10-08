import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import reslogo from "../assets/images/res-logo.png";
import { FaLocationArrow } from "react-icons/fa";

export function FooterPage() {
  return (
    <Footer className="px-24  bg-red-200 h-auto">
      <div className="w-full ">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4  dark:text-white">
          <div className="flex flex-col  gap-3 ">
            <img
              src={reslogo}
              alt=""
              className=" w-32 rounded-full ml-[-24px]"
            />
            <strong className="mr-8 text-lg">Tasty Treat</strong>
            <p className="text-xs font-thin">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, sapiente!
            </p>
          </div>
          <div>
            <Footer.Title
              title="Delivery Time"
              className="font-bold dark:text-white"
            />
            <Footer.LinkGroup col className="dark:text-white">
              <Footer.Link>
                Sunday to Thursday <br />
                10:00am - 11:00pm
              </Footer.Link>

              <Footer.Link>
                Friday to Saturday <br />
                Off day
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contact" className="dark:text-white" />
            <Footer.LinkGroup col className="dark:text-white">
              <Footer.Link href="#">
                Location: Patia Bhubaneshwar <br /> Odisha
              </Footer.Link>
              <Footer.Link>Phone: 7542918414</Footer.Link>
              <Footer.Link href="#">Email: tastytreat@gmail.com</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="News Letter" className="dark:text-white" />
            <Footer.LinkGroup col className="dark:text-white">
              <Footer.Link href="#">Subscribe our newsletter</Footer.Link>
              <Footer.Link href="#">Term & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="flex flex-wrap  py-6 justify-center  gap-24">
          <Footer.Copyright
            href="#"
            by="RnPsoft PVT LTD"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="hover:text-[#16a5fb]"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="hover:text-[#dd2b73]"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="hover:text-[#1da1f2]"
            />
            <Footer.Icon
              // href="https://github.com/123ramashish"
              icon={BsGithub}
              className="hover:text-black"
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              className="hover:text-[#ea4c89]"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
