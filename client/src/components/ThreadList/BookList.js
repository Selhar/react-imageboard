import Book from '../Book/Book';
import './BookList.css';
import PropTypes from 'prop-types'
import React from 'react'
import cuid from 'cuid';

const BookList = ({ books, category }) => {
  return (
    <div className="pure-u-1-2 container">
      <h1>{category}</h1>
      <hr/>
      <div className="booklist">
        {books.map((book) =>
          <Book category={category} book={book} key={cuid()} />
        )}
      </div>
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
}

export default BookList
