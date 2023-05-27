import { Fragment, useEffect, useState } from 'react';
import allRestaurantData from '../utils/mockData';
import RestaurantCard from './RestaurantCard';

export default RestaurantCardsContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showTopRes, setShowTopRes] = useState(false);
  useEffect(() => {
    setRestaurants(allRestaurantData);
  }, []);

  const topRatedRes = () => {
    if (!showTopRes) {
      const topRatedRestaurants = restaurants.filter((res) => res.rating >= 4);
      setRestaurants(topRatedRestaurants);
      setShowTopRes(true);
    } else {
      setRestaurants(allRestaurantData);
      setShowTopRes(false);
    }
  };

  return (
    <Fragment>
      <div className="filter">
        <button
          className={showTopRes ? 'filter-btn-clicked' : 'filter-btn'}
          onClick={topRatedRes}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurants.map((restaurantData) => {
          return (
            <RestaurantCard
              key={restaurantData.id}
              restaurantData={restaurantData}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
