import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Button, Drawer } from "flowbite-react";
import useCartShow from "../customHooks/useCartShow";
import { Card } from "flowbite-react";
import {
  DecreaseQuantity,
  IncreaseQuantity,
  CalculateTotalPrice,
} from "../Redux/Cart/cartSlice.js";

export default function Cart() {
  const { isOpen, handleClose, handleOpen } = useCartShow();
  const location = useLocation();
  const { totalPrice, cart, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/cart") {
      handleOpen();
    } else {
      handleClose();
    }
  }, [location.pathname]);

  const handleAdd = (id) => {
    dispatch(IncreaseQuantity({ id }));
    dispatch(CalculateTotalPrice());
  };

  const handleSubtract = (id) => {
    dispatch(DecreaseQuantity({ id }));
    dispatch(CalculateTotalPrice());
  };

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      position="right"
      className="z-50"
    >
      <Drawer.Header title="Cart" />
      <Drawer.Items>
        {cart &&
          cart.map((item) => (
            <Card className="max-w-sm mt-7" key={item.id}>
              <div className="flex items-center justify-between">
                <div className="shrink-0">
                  <img
                    alt={item.name}
                    height="32"
                    src={item.imageUrl}
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex flex-col justify-between">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="truncate text-2xl flex justify-between dark:text-white bg-red-200 px-2 w-20 m-auto">
                    <span
                      className="font-bold cursor-pointer"
                      onClick={() => handleSubtract(item.id)}
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      className="cursor-pointer"
                      onClick={() => handleAdd(item.id)}
                    >
                      +
                    </span>
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-green-400 dark:text-white">
                  ${item.quantity * item.price}
                </div>
              </div>
            </Card>
          ))}
      </Drawer.Items>

      <div className="flex bg-red-600 p-4 justify-between rounded-lg my-3">
        <p className="text-white font-bold text-sm">
          Subtotal: <span className="text-xl">${totalPrice}</span>
        </p>
        <button className="p-2 bg-white rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 active:bg-gray-600">
          Checkout
        </button>
      </div>
    </Drawer>
  );
}
