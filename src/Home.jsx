// src/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import books from "./booksData";
import BookCard from "./components/BookCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Book Library</h1>
      
      {/* Add Book Button */}
      <button className="add-book-btn" onClick={() => navigate("/add-book")}>
        Add Book
      </button>

      {/* Book List */}
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
