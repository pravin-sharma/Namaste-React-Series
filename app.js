import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yPxmHYHF8tgtmWhpC59Jk2PLpzbxaL-9bA&usqp=CAU"
        alt="app logo"
      />
      <h1 className="logo-title">Mealify</h1>
    </div>
    <div className="nav-list">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <img
            className="cart-icon"
            src="https://cdn-icons-png.flaticon.com/512/3916/3916598.png"
            alt="cart icon"
          />
        </li>
      </ul>
    </div>
  </div>
);

const Body = () => (
  <div className="body">
    <SearchBar />
    <RestaurantCardsContainer />
  </div>
);

const SearchBar = () => (
  <div className="search">
    <input className="search-input" type="text" />
    <button className="search-button">search</button>
  </div>
);

const RestaurantCardsContainer = () => {
  const allRestaurantData = [
    {
      id: 1,
      name: "Hotel Vrindavan",
      resImage:
        "https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=vrMzS4pY_QjiDtCzpVE3ClKqbU636fb4CKH0nlsduC4=",
      type: "Veg",
      cuisine: ["Indian"],
      rating: "5",
      eta: "30",
    },
    {
      id: 2,
      name: "Madhuram",
      resImage:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      type: "Veg",
      cuisine: ["Asian"],
      rating: "4.5",
      eta: "20",
    },
  ];

  return (
    <div className="restaurant-container">
      {allRestaurantData.map((restaurantData) => {
        return (
          <RestaurantCard
            key={restaurantData.id}
            restaurantData={restaurantData}
          />
        );
      })}
    </div>
  );
};

const RestaurantCard = ({ restaurantData }) => {
  const { name, resImage, type, cuisine, rating, eta } = restaurantData;

  return (
    <div className="restaurant-card">
      <img src={resImage} alt="image" className="image" />
      <p className="name">{name}</p>
      <p className="type">type: {type}</p>
      <p className="cuisine">cuisine: {cuisine}</p>
      <p className="rating">starts: {rating}</p>
      <p className="eta">ETA: {eta} minutes</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
