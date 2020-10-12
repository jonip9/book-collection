import React from 'react';

function BookGenre(props) {
  function handleSelection(e) {
    props.onSelection(e);
  }

  return (
    <>
      <fieldset>
        <legend>Genre:</legend>
        <label>
          Text 1
          <input
            id="genre1"
            name="genre"
            type="checkbox"
            value="Genre 1"
            onChange={(e) => handleSelection(e)} />
        </label>
        <label>
          Text 2
          <input
            id="genre2"
            name="genre"
            type="checkbox"
            value="Genre 2"
            onChange={(e) => handleSelection(e)} />
        </label>
      </fieldset>
    </>
  );
}

export default BookGenre;
