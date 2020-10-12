import React from 'react';
import './BookForm.css';

function BookGenre(props) {
  function handleSelection(e) {
    props.onSelection(e);
  }

  return (
    <>
      <fieldset>
        <legend>Genre</legend>
          <input
            id="genre1"
            name="genre"
            type="checkbox"
            value="Fantasy"
            onChange={(e) => handleSelection(e)} />
          <label>Fantasy</label>
          <input
            id="genre2"
            name="genre"
            type="checkbox"
            value="Science fiction"
            onChange={(e) => handleSelection(e)} />
          <label>Science fiction</label>
          <input
            id="genre3"
            name="genre"
            type="checkbox"
            value="Horror"
            onChange={(e) => handleSelection(e)} />
          <label>Horror</label>
      </fieldset>
    </>
  );
}

export default BookGenre;
