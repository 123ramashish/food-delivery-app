import React from "react";
import { Button, Card } from "flowbite-react";
import product21 from "../assets/images/product_2.1.jpg";
import product22 from "../assets/images/product_2.2.jpg";
import product31 from "../assets/images/product_3.1.jpg";
import product41 from "../assets/images/product_4.1.jpg";
export default function PizzaPage() {
  return (
    <div className="flex  flex-wrap w-full px-20 py-12  gap-6  justify-center relative">
      <h1 className="font-serif font-bold text-2xl absolute top-2">
        Hot Pizza
      </h1>
      <Card className="max-w-sm flex flex-col w-52">
        <div className="text-center flex flex-col items-center">
          <img src={product21} alt="" className="size-20" />
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
          <img src={product22} alt="" className="size-20" />
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
          <img src={product31} alt="" className="size-20" />
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
          <img src={product41} alt="" className="size-20" />
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
  );
}
