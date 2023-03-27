import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [openai, setOpenai] = useState([]);
  useEffect(() => {
    const loadApiData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const data = await res.json();
      setOpenai(data.data.tools);
    };
    loadApiData();
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {openai.map((card) => (
        <Card card={card} key={card.id}></Card>
      ))}
    </div>
  );
};

export default Cards;
