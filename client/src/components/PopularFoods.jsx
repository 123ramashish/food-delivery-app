import React, { useState } from "react";
import { Button, Card } from "flowbite-react";
import humburger from "../assets/images/hamburger.png";
import pizzaimage from "../assets/images/pizza.png";
import breadimage from "../assets/images/bread.png";
import product21 from "../assets/images/product_2.1.jpg";
import product31 from "../assets/images/product_3.1.jpg";
import product41 from "../assets/images/product_4.1.jpg";

export default function PopularFoods() {
  const [selectedFood, setSelectedFood] = useState("all");

  const handleClick = (id) => {
    if (id === "all") {
      setSelectedFood("all");
    } else {
      setSelectedFood(id);
    }
  };

  return (
    <div className="flex flex-col items-center w-full py-12 px-24">
      <h1 className="text-2xl font-serif font-bold text-center my-2">
        Popular Foods
      </h1>
      <div className="bg-red-600 w-full py-6 flex rounded-md my-6 items-center">
        <div className="flex flex-wrap text-white gap-12 m-auto text-lg">
          <Button
            id="all"
            className="bg-red-600"
            onClick={() => handleClick("all")}
          >
            All
          </Button>
          <Button
            id="burger"
            className="flex items-center bg-red-600 active:bg-white"
            onClick={() => handleClick("burger")}
          >
            <img src={humburger} alt="Burger" className="h-6 mr-2" />
            Burger
          </Button>
          <Button
            id="pizza"
            className="flex items-center bg-red-600"
            onClick={() => handleClick("pizza")}
          >
            <img src={pizzaimage} alt="Pizza" className="h-6 mr-2" />
            Pizza
          </Button>
          <Button
            id="bread"
            className="flex items-center bg-red-600"
            onClick={() => handleClick("bread")}
          >
            <img src={breadimage} alt="Bread" className="h-6 mr-2" />
            Bread
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap w-full px-20 py-12 gap-6 justify-center relative">
        {(selectedFood === "all" || selectedFood === "burger") && (
          <Card className="max-w-sm flex flex-col w-52">
            <div className="text-center flex flex-col items-center">
              <img src={product21} alt="Vegetarian Pizza" className="h-20" />
              <p className="dark:text-white">Vegetarian Pizza</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <p className="text-red-500 text-sm font-sans">$115</p>
              <Button className="h-8 w-26 bg-red-500 items-center">
                Add to cart
              </Button>
            </div>
          </Card>
        )}
        {(selectedFood === "all" || selectedFood === "bread") && (
          <Card className="max-w-sm flex flex-col w-52">
            <div className="text-center flex flex-col items-center">
              <img src={product31} alt="Maxican Green Wave" className="h-20" />
              <p className="dark:text-white">Maxican Green Wave</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <p className="text-red-500 text-sm font-sans">$110</p>
              <Button className="h-8 w-26 bg-red-500 items-center">
                Add to cart
              </Button>
            </div>
          </Card>
        )}
        {(selectedFood === "all" || selectedFood === "pizza") && (
          <Card className="max-w-sm flex flex-col w-52">
            <div className="text-center flex flex-col items-center">
              <img src={product41} alt="Seafood Pizza" className="h-20" />
              <p className="dark:text-white">Seafood Pizza</p>
            </div>
            <div className="flex justify-between items-center my-3">
              <p className="text-red-500 text-sm font-sans">$115</p>
              <Button className="h-8 w-26 bg-red-500 items-center">
                Add to cart
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
