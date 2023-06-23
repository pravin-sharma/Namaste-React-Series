import { Fragment, useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import ShimmerCard from './RestaurantCardShimmer';
import { RES_API_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

export default RestaurantCardsContainer = (props) => {
  const { searchText } = props;
  const [restaurants, setRestaurants] = useState([]);
  const [showTopRes, setShowTopRes] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    (async () => {
      const apiResponse = await fetch(RES_API_URL);
      const parsedResponse = await apiResponse.json();
      const resData =
        parsedResponse?.data?.cards[2]?.data?.data?.cards ||
        parsedResponse?.data?.cards[0]?.data?.data?.cards ||
        [];
      setRestaurants(resData);
    })();
  }, []);

  useEffect(() => {
    if (!searchText) {
      setFilteredRestaurants([]);
    } else {
      const filteredRestaurants = restaurants.filter((res) =>
        res.data.name?.toLowerCase().includes(searchText?.toLowerCase())
      );
      setFilteredRestaurants(filteredRestaurants);
    }
  }, [searchText]);

  const topRatedRes = () => {
    if (!showTopRes) {
      const topRatedRestaurants = restaurants.filter(
        (res) => parseInt(res.data.avgRating) >= 4
      );
      setFilteredRestaurants(topRatedRestaurants);
      setShowTopRes(true);
    } else {
      setFilteredRestaurants([]);
      setShowTopRes(false);
    }
  };

  const renderResCards = (resData) => {
    return resData.map((res) => {
      return (
        <Link to={`/restaurant/${res.data.id}`}>
          <RestaurantCard key={res.data.id} restaurantData={res.data} />
        </Link>
      );
    });
  };

  return restaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <Fragment>
      <div className="filter">
        <button
          className={showTopRes ? 'filter-btn-clicked' : 'filter-btn'}
          onClick={topRatedRes}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* IF no filter results found */}
      {filteredRestaurants.length == 0 &&
        (showTopRes || Boolean(searchText.length)) && (
          <div className="">
            <h1 style={{ margin: '1rem' }}>No Results</h1>
          </div>
        )}
      <div className="restaurant-container">
        {/* Initial Render */}
        {filteredRestaurants.length == 0
          ? renderResCards(restaurants)
          : renderResCards(filteredRestaurants)}
      </div>
    </Fragment>
  );
};
