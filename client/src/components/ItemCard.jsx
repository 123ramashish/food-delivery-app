import React from "react";
import { Card } from "flowbite-react";
import category1 from "../assets/images/category-01.png";
import category2 from "../assets/images/category-02.png";
import category3 from "../assets/images/category-03.png";
import category4 from "../assets/images/category-04.png";
export default function ItemCard() {
  return (
    <div className="flex flex-wrap justify-between items-center my-20 ">
      <Card className="max-w-sm w-fit m-auto mb-8 bg-red-200 transition delay-150 duration-300 ease-in-out  hover:-translate-y-2">
        <div className="mx-12 flex  justify-start ">
          <div className="flex items-center justify-around gap-8 ">
            <img src={category1} alt="" />
            <p className="text-lg">Fast Food</p>
          </div>
        </div>
      </Card>

      <Card className="max-w-sm w-fit m-auto mb-8 bg-red-200 transition delay-150 duration-300 ease-in-out  hover:-translate-y-2">
        <div className="mx-12 flex  justify-start ">
          <div className="flex items-center justify-around gap-8 ">
            <img src={category2} alt="" />
            <p className="text-lg">Pizza</p>
          </div>
        </div>
      </Card>
      <Card className="max-w-sm w-fit m-auto mb-8 bg-red-200 transition delay-150 duration-300 ease-in-out  hover:-translate-y-2">
        <div className="mx-12 flex  justify-start ">
          <div className="flex items-center justify-around gap-8 ">
            <img src={category3} alt="" />
            <p className="text-lg">Asian Food</p>
          </div>
        </div>
      </Card>
      <Card className="max-w-sm w-fit  m-auto  bg-red-200 transition delay-150 duration-300 ease-in-out  hover:-translate-y-2">
        <div className="mx-12 flex  justify-start ">
          <div className="flex items-center justify-around gap-8 ">
            <img src={category4} alt="" />
            <p className="text-lg">Row Meat</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
