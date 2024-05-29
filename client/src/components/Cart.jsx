import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Drawer } from "flowbite-react";
import useCartShow from "../customHooks/useCartShow";

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
    <Drawer open={isOpen} onClose={handleClose} position="right">
      <Drawer.Header title="Cart" />
      <Drawer.Items></Drawer.Items>
    </Drawer>
  );
}
