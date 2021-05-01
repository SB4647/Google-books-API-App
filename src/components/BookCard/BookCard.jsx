import React from "react";
import styles from "./BookCard.module.scss";

const BookCard = (props) => {

  const { image, title, author, published } = props;

  return (
    <div className={styles.contents}>
      <img src={image} alt="" />
        <div className="desc">
          <h2>{title}</h2>
          <h3>{author}</h3>
          <p>{published}</p>
        </div>
    </div>
  )

};

export default BookCard;
