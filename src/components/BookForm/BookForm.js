import React from 'react';
import GenreSelection from './components/GenreSelection';
import useOnValueChange from './hooks';

function BookForm() {
  const { formData, handleInput } = useOnValueChange();

  function handleGenreSelection(e, genres = null) {
    handleInput(e, genres);
  }

  return (
    <>
      <p>{formData.genre}</p>
      <form>
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
            id="published"
            name="published"
            type="date"
            onChange={(e) =>
              handleInput(e)} />
        </label>
        <GenreSelection onSelection={handleGenreSelection} />
      </form>
    </>
  );
}

export default BookForm;
