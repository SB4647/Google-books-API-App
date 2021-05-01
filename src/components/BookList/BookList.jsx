import styles from "./BookList.module.scss";
import BookCard from "../BookCard/BookCard";

const BookList = (props) => {
    const { books } = props;

    return (
        <div className={styles.contents}>
            {books.map((book, i) => {
                return (
                    <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate}
                    />
                );
            })}
        </div>
    );
};

export default BookList;
