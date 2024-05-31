import React from "react";
import Header from "../components/Header";
import OrderHome from "../components/OrderHome";
import ItemCard from "../components/ItemCard";
import ServePage from "../components/ServePage";
import DeliveryPage from "../components/DeliveryPage";
import PizzaPage from "../components/PizzaPage";

export default function Home() {
  return (
    <>
      <OrderHome />
      <ItemCard />
      <ServePage />
      <DeliveryPage />
      <PizzaPage />
    </>
  );
}
