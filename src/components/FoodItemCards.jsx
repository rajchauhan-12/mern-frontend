import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
// import "./FoodSection.css";

const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic cheese pizza with basil.",
    price: 299,
    image: "/images/pizza.jpg",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Spicy paneer tikka with chutney.",
    price: 199,
    image: "/images/paneer.jpg",
  },
  {
    id: 3,
    name: "Veg Burger",
    description: "Crispy patty with fresh veggies.",
    price: 149,
    image: "/images/burger.jpg",
  },
];

export default function FoodSection() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const addToCart = (item) => {
    if (!user?.token) {
      alert("Please login to add your order");
      navigate("/login");
      return;
    }

    // TODO: Add cart logic here
    alert(`${item.name} added to cart`);
  };

  return (
    <section className="food-section">
      <h2 className="food-title">Our Popular Dishes</h2>
      <div className="food-row">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
