import React from 'react';
import useGenreSelection from './hooks'

function GenreSelection(props) {
  const { genres, genreChecked } = useGenreSelection();

  function handleSelection(e) {
    genreChecked(e);
    props.onSelection(e, genres);
  }

  return (
    <>
      <fieldset>
        <legend>Genre:</legend>
        <label>
          Text 1
          <input
            id="genre1"
            name="genre1"
            type="checkbox"
            value="Genre 1"
            onChange={(e) => handleSelection(e)} />
        </label>
        <label>
          Text 2
          <input
            id="genre2"
            name="genre2"
            type="checkbox"
            value="Genre 2"
            onChange={(e) => handleSelection(e)} />
        </label>
      </fieldset>
      <p>{genres}</p>
    </>
  );
}

export default GenreSelection;