import React from 'react';
import { useGlobalContext } from '../context/Context';
const Search = () => {
  const { search, setsearch, error } = useGlobalContext();

  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()} className="search_form">
        <label htmlFor="name">SEARCH YOUR FAVORITE MOVIE</label>
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          type="text"
          className="search_form_input"
        />
        {error.show && <p className="search_form_error">{error.msg}</p>}
      </form>
    </div>
  );
};

export default Search;
