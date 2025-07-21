import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FoodSection from "./FoodItemCards";
export default function Home() {
  const foodRef = useRef(null);
  const navigate = useNavigate();

  const scrollToFood = () => {
    foodRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-page">
      {/* Welcome Section */}
      <section className="fullscreen-bg">
        <div className="fullscreen-bg-content">
          <h1>Welcome to Our Cafe</h1>
          <button onClick={scrollToFood}>Select Food Items</button>
        </div>
      </section>

      {/* Food Section */}
      <div ref={foodRef}>
        <FoodSection />
      </div>

     
    </div>
  );
}
