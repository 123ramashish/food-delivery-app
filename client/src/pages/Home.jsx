import React from "react";
import Header from "../components/Header";
import OrderHome from "../components/OrderHome";
import ItemCard from "../components/ItemCard";

export default function Home() {
  return (
    <>
      <OrderHome />
      <ItemCard />
    </>
  );
}
