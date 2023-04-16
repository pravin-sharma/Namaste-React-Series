import allRestaurantData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

export default RestaurantCardsContainer = () => {
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
