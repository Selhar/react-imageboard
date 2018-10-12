import './BookList.css'
import React, {Component} from 'react'
import addBooksToState from '../../actions/BookListActions'
import {connect} from 'react-redux'
import fetch from 'cross-fetch'
import BookList from './BookList.js'
import PropTypes from 'prop-types'

class BookListContainer extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    addBooksToState: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { addBooksToState } = this.props;
      fetch('/books')
      .then(res => res.json())
      .then(books => {
        addBooksToState(books);
      })
  }

  render() {
    const {category, books} = this.props;
    return (
      <BookList books={books} category={category} />
    )
  }
}

const mapStateToProps = state => ({
  books: state.books.data
})

const mapDispatchToProps = dispatch => {
  return {
    addBooksToState: books => dispatch(addBooksToState(books))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookListContainer)
