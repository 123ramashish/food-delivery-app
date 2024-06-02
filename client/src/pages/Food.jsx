import React from "react";
import { Button, Card, Label, Select } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import product1 from "../assets/images/product_01.1.jpg";
import product2 from "../assets/images/product_01.3.jpg";
import product3 from "../assets/images/product_2.1.jpg";
import product4 from "../assets/images/product_2.2.jpg";

import burgerbackground from "../assets/images/burger-background.jpg";
export default function Food() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (e) => setCurrentPage(e.target.value);
  return (
    <>
      <div className="relative w-full">
        <img src={burgerbackground} alt="" className="h-36 w-full opacity-70" />
        <h1 className="absolute top-2 left-1/2 text-white  font-bold text-4xl">
          All Foods
        </h1>
      </div>
      <div>
        <div className=" w-full flex flex-wrap  my-8 justify-around gap-3">
          <div className=" flex items-center border-gray-300 border-2 rounded-md">
            <input
              type="search"
              placeholder="I'm looking for..."
              className=" border-gray-300 border-none focus:outline-0 dark:text-white"
            />
            <IoIosSearch className="text-3xl h-full border-l-2 text-gray-600 dark:text-white" />
          </div>

          <div className="max-w-sm">
            <Select id="food" className="dark:text-white">
              <option value={"all"}>Default Value</option>
              <option value={"ascendingorder"}>Alphabetically, A-Z</option>
              <option value={"descendingorder"}>Alphabetically, Z-A</option>
              <option value={"highprice"}>High Price</option>
              <option value={"lowprice"}>Low Price</option>
            </Select>
          </div>
        </div>

        <div className="flex  flex-wrap w-full px-20 py-4  gap-6  justify-center">
          <Card className="max-w-sm flex flex-col w-52">
            <div className="text-center flex flex-col items-center">
              <img src={product1} alt="" className="size-20" />
              <p className="dark:text-white">Vegetarian Pizza</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <p className="text-red-500 text-sm font-sans ">$ 115</p>
              <Button className="h-8 w-26 bg-red-500 items-center">
                Add to cart
              </Button>
            </div>
          </Card>

          <Card className="max-w-sm flex flex-col w-52">
            <div className="text-center flex flex-col items-center">
              <img src={product2} alt="" className="size-20" />
              <p className="dark:text-white">Double Cheese Margherita</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <p className="text-red-500 text-sm font-sans ">$ 110</p>
              <Button className="h-8 w-26 bg-red-500 items-center">
                Add to cart
              </Button>
            </div>
          </Card>

          <Card className="max-w-sm flex flex-col w-52">
            <div className="text-center flex flex-col items-center">
              <img src={product3} alt="" className="size-20" />
              <p className="dark:text-white">Maxican Green Wave</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <p className="text-red-500 text-sm font-sans ">$ 110</p>
              <Button className="h-8 w-26 bg-red-500 items-center">
                Add to cart
              </Button>
            </div>
          </Card>

          <Card className="max-w-sm flex flex-col w-52">
            <div className="text-center flex flex-col items-center">
              <img src={product4} alt="" className="size-20" />
              <p className="dark:text-white">Seafood Pizza</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <p className="text-red-500 text-sm font-sans ">$ 115</p>
              <Button className="h-8 w-26 bg-red-500 items-center">
                Add to cart
              </Button>
            </div>
          </Card>
        </div>

        <div className="flex overflow-x-auto my-8 sm:justify-center dark:text-white">
          <Pagination
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
}
