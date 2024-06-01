import React from "react";
import OrderHome from "../components/OrderHome";
import ItemCard from "../components/ItemCard";
import ServePage from "../components/ServePage";
import DeliveryPage from "../components/DeliveryPage";
import PizzaPage from "../components/PizzaPage";
import PopularFoods from "../components/PopularFoods";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <OrderHome />
      <ItemCard />
      <ServePage />
      <PopularFoods />
      <DeliveryPage />
      <PizzaPage />
      <Testimonial />
    </>
  );
}
