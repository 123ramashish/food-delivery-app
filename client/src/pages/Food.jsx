import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Label, Select, Pagination } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import burgerbackground from "../assets/images/burger-background.jpg";
import { FoodSuccess, FoodFailure } from "../Redux/Food/foodSlice.js";
import { CartSuccess, CartFailure } from "../Redux/Cart/cartSlice.js";
export default function Food() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFood, setSelectedFood] = useState("all");
  const dispatch = useDispatch();
  const { food } = useSelector((state) => state.food);

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

  const handleSearch = (e) => {
    setSelectedFood(e.target.value);
  };

  const handleClick = async (id, name, price, imageUrl) => {
    dispatch(CartSuccess({ id, name, price, imageUrl }));
  };

  return (
    <>
      <div className="relative w-full">
        <img src={burgerbackground} alt="" className="h-36 w-full opacity-70" />
        <h1 className="absolute top-2 left-1/2 text-white font-bold text-4xl">
          All Foods
        </h1>
      </div>
      <div>
        <div className="w-full flex flex-wrap my-8 justify-around gap-3">
          <div className="flex items-center border-gray-300 border-2 rounded-md">
            <input
              type="search"
              placeholder="I'm looking for..."
              className="border-none focus:outline-0 dark:text-white"
              onChange={handleSearch}
            />
            <IoIosSearch className="text-3xl h-full border-l-2 text-gray-600 dark:text-white" />
          </div>

          <div className="max-w-sm">
            <Select
              id="food"
              className="dark:text-white"
              onChange={(e) => setSelectedFood(e.target.value)}
            >
              <option value={"all"}>Default Value</option>
              <option value={"ascendingorder"}>Alphabetically, A-Z</option>
              <option value={"descendingorder"}>Alphabetically, Z-A</option>
              <option value={"highprice"}>High Price</option>
              <option value={"lowprice"}>Low Price</option>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap w-full px-20 py-4 gap-6 justify-center">
          {food &&
            food.map((item) => (
              <Card className="max-w-sm flex flex-col w-52" key={item._id}>
                <div className="text-center flex flex-col items-center">
                  <img src={item.imageUrl} alt="" className="size-20" />
                  <p className="dark:text-white">{item.name}</p>
                </div>
                <div className="flex justify-between items-center my-3">
                  <p className="text-red-500 text-sm font-sans">
                    ${item.price}
                  </p>
                  <Button
                    className="h-8 w-26 bg-red-500 items-center"
                    onClick={() =>
                      handleClick(
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

        <div className="flex overflow-x-auto my-8 sm:justify-center dark:text-white">
          <Pagination
            currentPage={currentPage}
            totalPages={100}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
