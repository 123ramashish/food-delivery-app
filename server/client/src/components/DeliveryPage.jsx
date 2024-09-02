import React from "react";
import location from "../assets/images/location.png";
import { CiCircleCheck } from "react-icons/ci";

export default function DeliveryPage() {
  return (
    <section className="flex justify-center items-center w-full h-auto px-36 my-8">
      <div className="">
        <img src={location} alt="" className="max-h-[700px]" />
      </div>
      <div className="left mt-10 ml-20 font-sans dark:text-white">
        <h1 className="text-bold text-xl font-serif">
          Why <span className="text-red-600">Tasty Treat?</span>
        </h1>
        <p className="text-xs font-thin">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          reiciendis architecto numquam ullam, similique voluptatem.
        </p>
        <h5 className=" flex items-center gap-2 text-sm font-serif my-2">
          <CiCircleCheck className="text-red-600" />
          Fresh and tasty foods
        </h5>
        <p className="text-xs font-thin">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
          aspernatur.
        </p>

        <h5 className=" flex items-center gap-2 text-sm font-serif my-2">
          <CiCircleCheck className="text-red-600" />
          Quality support
        </h5>
        <p className="text-xs font-thin">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
          aspernatur.
        </p>

        <h5 className=" flex items-center gap-2 text-sm font-serif my-2">
          <CiCircleCheck className="text-red-600" />
          Order from any location
        </h5>
        <p className="text-xs font-thin">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
          aspernatur.
        </p>
      </div>
    </section>
  );
}
