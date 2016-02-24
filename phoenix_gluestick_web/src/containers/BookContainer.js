import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Book from "../components/Book";
import Author from "../components/Author";

import { getBook } from "../actions/books";
import { getAuthor } from "../actions/authors";

export class BookContainer extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static async gsBeforeRoute ({dispatch}, renderProps, query, serverProps) {
    const { bookId } = renderProps;
    const { author_id } = await dispatch(getBook(bookId));
    await dispatch(getAuthor(author_id));
  }

  render () {
    const { params: { bookId }, books, authors } = this.props;
    const book = books[bookId];
    const author = authors[book.author_id];
    return (
      <div>
        <Book book={book} />
        <Author author={author} />
      </div>
    );
  }
}

export default connect(
  (state) => ({authors: state.authors,
                 books: state.books}),
  (dispatch) => bindActionCreators({/** _INSERT_ACTION_CREATORS_ **/}, dispatch)
)(BookContainer);
