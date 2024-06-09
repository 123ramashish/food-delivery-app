import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Drawer } from "flowbite-react";
import useCartShow from "../customHooks/useCartShow";
import { Card } from "flowbite-react";
import product from "../assets/images/product_01.jpg";
export default function Cart() {
  const { isOpen, handleClose, handleOpen } = useCartShow();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/cart") {
      handleOpen();
    } else {
      handleClose();
    }
  }, [location.pathname]);

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      position="right"
      className="z-50"
    >
      <Drawer.Header title="Cart" />
      <Drawer.Items>
        <Card className="max-w-sm mt-7">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <img
                alt="Neil image"
                height="32"
                src={product}
                width="32"
                className="rounded-full"
              />
            </div>
            <div className="min-w-0 flex flex-col justify-between">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                Neil Sims
              </p>
              <p className="truncate text-2xl flex justify-between dark:text-white bg-red-200 px-2">
                <span className="font-bold">-</span>
                <span>+</span>
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-green-400 dark:text-white">
              $320
            </div>
          </div>
        </Card>
      </Drawer.Items>

      <div className="flex bg-red-600 p-4 justify-between rounded-lg my-3">
        <p className="text-white font-bold text-sm">
          Subtotal: <span className="text-xl">$345</span>
        </p>
        <button className="p-2 bg-white rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 active:bg-gray-600 ">
          Checkout
        </button>
      </div>
    </Drawer>
  );
}
