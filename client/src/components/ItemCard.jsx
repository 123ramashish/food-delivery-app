import React from "react";
import { Card } from "flowbite-react";
import category1 from "../assets/images/category-01.png";
export default function ItemCard() {
  return (
    <Card className="max-w-sm w-fit flex flex-wrap justify-around m-auto my-20 bg-red-200 transition delay-150 duration-300 ease-in-out  hover:-translate-y-2">
      <div className="mx-12 flex  justify-start ">
        <div className="flex items-center justify-around gap-8 ">
          <img src={category1} alt="" />
          <p className="text-lg">Pizza</p>
        </div>
      </div>
    </Card>
  );
}
