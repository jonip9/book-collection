import React from 'react';

function Book(props) {
  return (
    <>
        <tr key={props.book._id}>
          <td>{props.book.name}</td>
          <td>{props.book.author}</td>
          <td>{props.book.published}</td>
          <td>{props.book.genre}</td>
        </tr>
    </>
  );
}

export default Book;
