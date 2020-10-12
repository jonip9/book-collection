import React from 'react';
import axios from 'axios';
import BookGenre from './BookGenre';
import useOnValueChange from './hooks';

function BookForm() {
  const { formData, handleInput } = useOnValueChange();

  function handleGenreSelection(e) {
    handleInput(e);
  }

  function handleSubmit(e) {
    axios.post('http://localhost:3000/books/', formData);
    e.preventDefault();
  }

  return (
    <>
      <p>{formData.published}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) =>
              handleInput(e)} />
        </label>
        <label>
          Author:
          <input
            id="author"
            name="author"
            type="text"
            onChange={(e) =>
              handleInput(e)} />
        </label>
        <label>
          Published:
          <input
            required={true}
            id="published"
            name="published"
            type="date"
            onChange={(e) =>
              handleInput(e)} />
        </label>
        <BookGenre onSelection={handleGenreSelection} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default BookForm;
