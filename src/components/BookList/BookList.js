import React from 'react';

function BookList(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Published</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </>
  );
}

export default BookList;
