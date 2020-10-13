import React from 'react';
import axios from 'axios';

function Book(props) {
  function deleteBook() {
    axios.delete('http://localhost:3000/books/delete/' + props.book._id)
      .then(() => {
        props.handleRefresh(true);
      })
      .catch((error) => { console.error(error); });
  }

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
          <td>
            <input 
              type="button" 
              value="Delete" 
              onClick={deleteBook} />
          </td>
        </tr>
    </>
  );
}

export default Book;
