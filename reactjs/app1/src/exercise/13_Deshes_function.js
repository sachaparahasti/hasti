import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
class VegDeshes extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.description = props.description;
    this.ingredients = props.ingredients;
    this.index = props.index;
  }
  render() {
    return (
      <div className="col-md-4">
        <div className="card dish-card h-100 text-left">
          <div className="card-body">
            <h5 className="card-title"><strong>Name:</strong>{this.name}</h5>
            <p className="card-text"><strong>Description:</strong>{this.description}</p>
            <p>
              <strong>Ingredients:</strong>
              <ul className="list-unstyled  mt-2">
                {this.ingredients.map((item, index) => (
                  <li key={index}> -{item}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
function Deshes() {
  const indianVegDishes = [
    {
      name: "Paneer Butter Masala",
      description:
        "A rich and creamy North Indian curry made with paneer cooked in a tomato-butter gravy.",
      ingredients: [
        "paneer",
        "tomato",
        "butter",
        "cream",
        "onion",
        "ginger garlic",
        "garam masala",
        "kasuri methi",
      ],
    },
    {
      name: "Masala Dosa",
      description:
        "A crispy fermented rice crepe filled with spiced potato masala, popular in South India.",
      ingredients: [
        "rice",
        "urad dal",
        "potato",
        "onion",
        "mustard seeds",
        "curry leaves",
        "green chilli",
        "turmeric",
      ],
    },
    {
      name: "Chole Bhature",
      description:
        "A Punjabi dish of spicy chickpea curry served with deep-fried bread.",
      ingredients: [
        "chickpeas",
        "onion",
        "tomato",
        "ginger garlic",
        "chole masala",
        "flour",
        "yogurt",
        "oil",
      ],
    },
    {
      name: "Dal Makhani",
      description:
        "A slow-cooked lentil dish made with black lentils, butter, and cream.",
      ingredients: [
        "black lentils",
        "kidney beans",
        "butter",
        "cream",
        "tomato",
        "ginger garlic",
        "garam masala",
      ],
    },
    {
      name: "Palak Paneer",
      description:
        "Paneer cubes cooked in a smooth spinach gravy with mild spices.",
      ingredients: [
        "paneer",
        "spinach",
        "onion",
        "tomato",
        "ginger garlic",
        "cream",
        "garam masala",
      ],
    },
    {
      name: "Rajma Chawal",
      description:
        "A comforting North Indian meal of red kidney bean curry served with rice.",
      ingredients: [
        "kidney beans",
        "rice",
        "onion",
        "tomato",
        "ginger garlic",
        "cumin",
        "garam masala",
      ],
    },
    {
      name: "Vegetable Biryani",
      description:
        "A fragrant rice dish cooked with mixed vegetables and aromatic spices.",
      ingredients: [
        "basmati rice",
        "mixed vegetables",
        "yogurt",
        "onion",
        "ginger garlic",
        "biryani masala",
        "mint",
      ],
    },
    {
      name: "Aloo Paratha",
      description:
        "A stuffed Indian flatbread filled with spiced mashed potatoes.",
      ingredients: [
        "wheat flour",
        "potato",
        "green chilli",
        "coriander",
        "cumin",
        "butter",
        "salt",
      ],
    },
    {
      name: "Pav Bhaji",
      description:
        "A Mumbai street food made of mashed vegetables cooked in butter and spices, served with bread rolls.",
      ingredients: [
        "potato",
        "tomato",
        "peas",
        "capsicum",
        "butter",
        "pav bhaji masala",
        "bread rolls",
      ],
    },
    {
      name: "Idli Sambar",
      description: "Soft steamed rice cakes served with lentil-vegetable stew.",
      ingredients: [
        "rice",
        "urad dal",
        "toor dal",
        "vegetables",
        "tamarind",
        "sambar powder",
        "mustard seeds",
      ],
    },
  ];
  return (
    <div className="container my-5">
      <h1 className="text-center dish-header mb-5 fw-bold">
        Top 5 Indian Veg Dishes
      </h1>
      <div className="row g-4">
        {/* Dish 1 */}
        {indianVegDishes.map((item, index) => {
          return (
            <VegDeshes
              key={index}
              name={item.name}
              description={item.description}
              ingredients={item.ingredients}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

root.render(<Deshes />);
