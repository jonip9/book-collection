import React from 'react';
import axios from 'axios';
import BookGenre from './BookGenre';
import './BookForm.css';
import useOnValueChange from './hooks';

function BookForm(props) {
  const { formData, handleInput } = useOnValueChange();

  function handleGenreSelection(e) {
    handleInput(e);
  }

  function handleSubmit(e) {
    axios.post('http://localhost:3000/books/', formData)
      .then(() => {
        props.handleRefresh(true);
      })
      .catch((error) => { console.error(error); });
    e.preventDefault();
  }

  return (
    <>
      <form className="bookForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) =>
            handleInput(e)} />
        <br />
        <label>Author</label>
        <input
          id="author"
          name="author"
          type="text"
          onChange={(e) =>
            handleInput(e)} />
        <br />
        <label>Published</label>
        <input
          required={true}
          id="published"
          name="published"
          type="date"
          onChange={(e) =>
            handleInput(e)} />
        <br />
        <BookGenre onSelection={handleGenreSelection} />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}

export default BookForm;
