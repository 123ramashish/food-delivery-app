import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "flowbite-react";
import humburger from "../assets/images/hamburger.png";
import pizzaimage from "../assets/images/pizza.png";
import breadimage from "../assets/images/bread.png";
import { FoodSuccess, FoodFailure } from "../Redux/Food/foodSlice.js";
import { CartSuccess } from "../Redux/Cart/cartSlice.js";

export default function PopularFoods() {
  const [selectedFood, setSelectedFood] = useState("all");
  const dispatch = useDispatch();
  const { food } = useSelector((state) => state.food);
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    const getFood = async () => {
      try {
        const response = await fetch(`/api/food/getfood/${selectedFood}`);

        if (!response.ok) {
          const failureData = await response.json();
          dispatch(FoodFailure(failureData));
          return;
        }

        const data = await response.json();
        dispatch(FoodSuccess(data));
      } catch (error) {
        dispatch(FoodFailure(error.message));
      }
    };

    getFood();
  }, [selectedFood, dispatch]);

  const handleClick = (id) => {
    setSelectedFood(id);
  };
  const handleAddCart = async (id, name, price, imageUrl) => {
    dispatch(CartSuccess({ id, name, price, imageUrl }));

    console.log(cart);
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
            onClick={() => handleClick("Burger")}
          >
            <img src={humburger} alt="Burger" className="h-6 mr-2" />
            Burger
          </Button>
          <Button
            id="pizza"
            className="flex items-center bg-red-600"
            onClick={() => handleClick("Pizza")}
          >
            <img src={pizzaimage} alt="Pizza" className="h-6 mr-2" />
            Pizza
          </Button>
          <Button
            id="Bread"
            className="flex items-center bg-red-600"
            onClick={() => handleClick("Bread")}
          >
            <img src={breadimage} alt="Bread" className="h-6 mr-2" />
            Bread
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap w-full px-20 py-12 gap-6 justify-center relative">
        {food &&
          food.map((item) => (
            <Card className="max-w-sm flex flex-col w-52" key={item._id}>
              <div className="text-center flex flex-col items-center">
                <img src={item.imageUrl} alt="" className="h-20" />
                <p className="dark:text-white">{item.name}</p>
              </div>
              <div className="flex justify-between items-center my-3">
                <p className="text-red-500 text-sm font-sans">${item.price}</p>
                <Button
                  className="h-8 w-26 bg-red-500 items-center"
                  onClick={() =>
                    handleAddCart(
                      item._id,
                      item.name,
                      item.price,
                      item.imageUrl
                    )
                  }
                >
                  Add to cart
                </Button>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
