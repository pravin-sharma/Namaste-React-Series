import { useState } from 'react';

export default SearchBar = (props) => {
  const { setSearchText } = props;
  const [text, setText] = useState('');

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="search-button" onClick={() => setSearchText(text)}>
        search
      </button>
    </div>
  );
};
