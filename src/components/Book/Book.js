import React from 'react';

function Book(props) {
  function iterateGenres() {
    let genres = props.book.genre.sort();
    let genresString = '';

    for (let i = 0; i < genres.length; i++) {
      genresString += genres[i];
      if ((i < genres.length - 1)) {
        genresString = genresString + ", ";
      }
    }

    return genresString;
  }

  return (
    <>
        <tr key={props.book._id}>
          <td>{props.book.name}</td>
          <td>{props.book.author}</td>
          <td>{props.book.published}</td>
          <td>{iterateGenres()}</td>
        </tr>
    </>
  );
}

export default Book;
