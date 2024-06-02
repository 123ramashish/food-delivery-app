import React from "react";
import heroimage from "../assets/images/hero.png";
import { Button } from "flowbite-react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function OrderHome() {
  return (
    <section className="flex justify-center items-center">
      <div className="left mt-10 ml-20 font-sans dark:text-white">
        <p className="text-sm font-serif">Easy way to make an order</p>
        <h1 className="text-lg font-medium mt-1 ">
          {" "}
          <span className="text-red-600 ">HUNGRY?</span> Just wait <br />
          food at <span className="text-red-600">your door</span>
        </h1>
        <p className="text-sm mt-1 mr-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolor sed
          consequatur qui totam, repellendus mollitia nemo alias impedit
          recusandae aperiam numquam doloribus iste sit, praesentium quisquam
          corrupti ut veniam.
        </p>
        <div className="flex flex-wrap gap-4 mt-3">
          <Button className=" h-9 bg-red-500 text-sm ">Order now&gt;</Button>
          <Button
            href="/food"
            className="h-9 border-red-500 text-sm outline outline-red-500 bg-white text-red-500"
          >
            See all foods
          </Button>
        </div>
        <div className="flex">
          <p className="inline-flex justify-center m-4 gap-2 items-center text-sm font-medium">
            <MdOutlineLocalShipping className="text-red-500 text-lg" />
            No shipping charge
          </p>
          <p className="inline-flex justify-center m-4 gap-2 items-center text-sm font-medium">
            <RiSecurePaymentLine className="text-red-500 text-lg" />
            100% secure checkout
          </p>
        </div>
      </div>
      <div className="right mt-6 mr-9">
        <img src={heroimage} alt="image not found" className="max-h-[700px]" />
      </div>
    </section>
  );
}
