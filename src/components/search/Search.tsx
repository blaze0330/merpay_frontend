import React, { useState } from 'react';
// import { CardItems } from "../../types";
// import { useDispatch } from "react-redux";
// import { getShops } from "../../store/actions/shops";

const Search = () => {
  const [keyword, setKeyword] = useState<string>();
  // const dispatch = useDispatch();
  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
    // dispatch(getShops(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="search"
      color="black"
      value={keyword}
      onChange={onKeywordChange}
      style={{
        backgroundColor: 'lightgrey',
        border: 'none  lightgrey',
        borderColor: 'transparent',
        borderRadius: '5px',
        height: '30px',
        width: '300px'
      }}></input>
  );
};

export default Search;
