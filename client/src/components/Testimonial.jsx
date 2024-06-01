import React from "react";
import { Carousel } from "flowbite-react";
import network from "../assets/images/network.png";
import ava1 from "../assets/images/ava-1.jpg";
import ava2 from "../assets/images/ava-2.jpg";
import ava3 from "../assets/images/ava-3.jpg";
import ava4 from "../assets/images/ava-4.jpg";
export default function Testimonial() {
  return (
    <section className="flex justify-center items-center w-full h-auto px-36 my-8">
      <div className="flex flex-col mt-10  font-sans p-3 dark:text-white">
        <h5 className="text-sm font-serif font-bold text-red-600">
          Testimonial
        </h5>
        <h1 className="text-xl font-sans font-bold my-2">
          What our <span className="text-red-600">customers</span> are saying
        </h1>
        <p className="text-xs font-thin ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          blanditiis unde vitae debitis harum magni?
        </p>

        <div className="h-36">
          <Carousel
            className="bg-white"
            pauseOnHover
            leftControl
            rightControl
            slideInterval={1000}
          >
            <div className="flex flex-col  h-full items-center justify-center  dark:bg-dark dark:text-white">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  alias modi ipsam, voluptatibus tenetur aut voluptates totam
                  sint nisi non.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <img src={ava1} alt="" className="size-8 rounded-full" />
                  <strong>Subham Sahu</strong>
                </div>
              </div>
            </div>

            <div className="flex flex-col  h-full items-center justify-center bg-white dark:bg-dark dark:text-white">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  alias modi ipsam, voluptatibus tenetur aut voluptates totam
                  sint nisi non.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <img src={ava2} alt="" className="size-8 rounded-full" />
                  <strong>Deepti Gyawali</strong>
                </div>
              </div>
            </div>
            <div className="flex flex-col  h-full items-center justify-center bg-white dark:bg-dark dark:text-white">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  alias modi ipsam, voluptatibus tenetur aut voluptates totam
                  sint nisi non.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <img src={ava3} alt="" className="size-8 rounded-full" />
                  <strong>Rohan Verma</strong>
                </div>
              </div>
            </div>
            <div className="flex flex-col  h-full items-center justify-center bg-white dark:bg-dark dark:text-white">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  alias modi ipsam, voluptatibus tenetur aut voluptates totam
                  sint nisi non.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <img src={ava4} alt="" className="size-8 rounded-full" />
                  <strong>Shivani Rathore</strong>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="">
        <img src={network} alt="" className="max-h-[600px]" />
      </div>
    </section>
  );
}
