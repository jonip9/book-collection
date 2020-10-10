import React from 'react';
import './App.css';
import BookList from '../BookList';
import Book from '../Book';
import BookForm from '../BookForm';

function App() {
  return (
    <div className="App">
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
