import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BookList from '../BookList';
import Book from '../Book';
import BookForm from '../BookForm';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/books/')
      .then((response) => {
        setBooks(response.data);
      });
  }, []);

  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <BookList>
            {books.map((item, i) => {
              return (
                <Book book={item} key={item._id} />
              );
            })}
          </BookList>
        </div>
        <div className="grid-item">
          <BookForm />
        </div>
      </div>
    </div>
  );
}

export default App;
