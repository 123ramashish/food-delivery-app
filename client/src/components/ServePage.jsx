import React from "react";
import service1 from "../assets/images/service-01.png";
import service2 from "../assets/images/service-02.png";
import service3 from "../assets/images/service-03.png";
export default function ServePage() {
  return (
    <div className=" flex flex-col m-auto mt-40 items-center  dark:text-white">
      <div className="top flex flex-col w-96 items-center mb-5">
        <h6 className="font-sans text-lg text-red-500 pb-3">What we serve</h6>
        <h1 className="text-3xl font-sans font-medium pb-4">
          Just sit back at home <br />
          &nbsp;&nbsp;&nbsp;we will{" "}
          <span className="text-red-500">take care</span>
        </h1>
        <p className="text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at
          quam aperiam iste, rerum impedit quod suscipit quasi minima!
        </p>
      </div>
      <div className="bottom flex flex-wrap m-auto justify-center items-center gap-36 my-12">
        <div className="flex flex-col items-center w-64">
          <img src={service1} alt="" className="size-14" />
          <h1 className="font-bold text-lg">Quick Delivery</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            tempore?
          </p>
        </div>
        <div className="flex flex-col items-center w-64">
          <img src={service2} alt="" className="size-14" />
          <h1 className="font-bold text-lg">Super Dine In</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            tempore?
          </p>
        </div>
        <div className="flex flex-col items-center w-64">
          <img src={service3} alt="" className="size-14" />
          <h1 className="font-bold text-lg">Easy Pick Up</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            tempore?
          </p>
        </div>
      </div>
    </div>
  );
}
