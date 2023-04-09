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
    <div className="search">
      <input type="text" />
      <button className="search-button">search</button>
    </div>
    <div className="restaurant-container">
      <RestaurantCard />
    </div>
  </div>
);

const RestaurantCard = () => (
  <div className="restaurant-card">
    {/* Image, Name, Cost, Star, veg/non-veg, cuisine */}
    <h3>Indiana Chinese</h3>
  </div>
);

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
