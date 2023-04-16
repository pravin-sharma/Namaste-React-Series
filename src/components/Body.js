import SearchBar from "./SearchBar";
import RestaurantCardsContainer from "./RestaurantCardsContainer";

export default Body = () => (
  <div className="body">
    <SearchBar />
    <div className="filter">
      <button className="filter-btn">Top Rated Restaurants</button>
    </div>
    <RestaurantCardsContainer />
  </div>
);
