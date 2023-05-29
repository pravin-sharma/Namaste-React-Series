import SearchBar from './SearchBar';
import RestaurantCardsContainer from './RestaurantCardsContainer';
import { useState } from 'react';

export default Body = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="body">
      <SearchBar setSearchText={setSearchText} />
      <RestaurantCardsContainer searchText={searchText} />
    </div>
  );
};
