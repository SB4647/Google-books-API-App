import React from "react";
import styles from "./Search.module.scss";


const Search = (props) => {
  const { handleSearch, searchBook } = props;


  return (
    <div className={styles.contents}>
      <form onSubmit={searchBook}>
        <input onChange={handleSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
