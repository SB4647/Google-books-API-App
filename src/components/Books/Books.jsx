import React from "react";
import Search from "../Search/Search";
import BookList from "../BookList/BookList";
import { useState } from "react";

const Books = () => {
    const [query, setQuery] = useState("");
    const [books, setStateBooks] = useState([]);

    const searchBook = async (event) => {
        event.preventDefault();

        try {
            //send GET request to get book data
            const reponse = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${query}`
            );
            //check if reponse is recieved
            if (reponse.ok) {
                const jsonResponse = await reponse.json();
                setStateBooks(jsonResponse.items);
                return;
            }
            //throw error if could not recieve response
            throw new Error("Request failed!");
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <Search handleSearch={handleSearch} searchBook={searchBook} />
            <BookList books={books} />
        </div>
    );
};

export default Books;
