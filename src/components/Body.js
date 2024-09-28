import SearchBar from './SearchBar';
import RestaurantCardsContainer from './RestaurantCardsContainer';
import { useState } from 'react';

export default Body = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="border border-gray-400 rounded-xl m-2.5 p-2.5">
      <SearchBar setSearchText={setSearchText} />
      <RestaurantCardsContainer searchText={searchText} />
    </div>
  );
};
