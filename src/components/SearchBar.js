import { useState } from 'react';

export default SearchBar = (props) => {
  const { setSearchText } = props;
  const [text, setText] = useState('');

  return (
    <div className="flex justify-center">
      <input
        className="mr-3.5 mb-3.5 p-3.5 rounded-lg w-80 border border-gray-300"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="p-2 h-[54px] border border-white rounded-lg bg-orange-500 w-24 text-gray-200 cursor-pointer hover:bg-orange-600" onClick={() => setSearchText(text)}>
        search
      </button>
    </div>
  );
};
