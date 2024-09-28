import { Fragment, useEffect, useState } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import ShimmerCard from './RestaurantCardShimmer';
import { ALL_RES_API_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

export default RestaurantCardsContainer = (props) => {
  const { searchText } = props;
  const [restaurants, setRestaurants] = useState([]);
  const [showTopRes, setShowTopRes] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(function fetchResEffect() {
    (async () => {
      const apiResponse = await fetch(ALL_RES_API_URL);
      const parsedResponse = await apiResponse.json();
      const resData =
        parsedResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurants(resData);
    })();
  }, []);

  useEffect(
    function searchEffect() {
      if (!searchText) {
        setFilteredRestaurants([]);
      } else {
        const filteredRestaurants = restaurants.filter((res) =>
          res?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
        );
        setFilteredRestaurants(filteredRestaurants);
      }
    },
    [searchText]
  );

  const topRatedRes = () => {
    if (!showTopRes) {
      const topRatedRestaurants = restaurants.filter(
        (res) => res?.info?.avgRating >= 4.5
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
        <Link to={`/restaurant/${res?.info?.id}`} key={res?.info?.id}>
          {res?.info?.promoted ? (
            <RestaurantCardPromoted restaurantData={res?.info}/>
          ) : (
            <RestaurantCard restaurantData={res?.info} />
          )}
        </Link>
      );
    });
  };

  return restaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <Fragment>
      <div className="flex justify-center">
        <button
          className={
            showTopRes
              ? 'p-2.5 mx-2.5 bg-gray-300 border border-gray-300 rounded-lg cursor-pointer'
              : 'p-2.5 mx-2.5 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200'
          }
          onClick={topRatedRes}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* IF no filter results found */}
      {filteredRestaurants.length == 0 &&
        (showTopRes || Boolean(searchText.length)) && (
          <div className="flex flex-wrap justify-start">
            <h1 style={{ margin: '1rem' }}>No Results</h1>
          </div>
        )}
      <div className="flex flex-wrap justify-start">
        {/* Initial Render */}
        {filteredRestaurants.length == 0
          ? renderResCards(restaurants)
          : renderResCards(filteredRestaurants)}
      </div>
    </Fragment>
  );
};
