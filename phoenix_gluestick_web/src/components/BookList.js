import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

import Book from "./Book";

export default class BookList extends Component {
  static propTypes = {
          description: PropTypes.string
      }

  static defaultProps = {
        linkPath: ""
    }

  render () {
    const books = this.renderBooks();
    return (
      <div>
        {books}
      </div>
    );
  }

  renderBooks() {
    const { books } = this.props;
    if (!books) return;

    return Object.values(books).map((book) => {
      return <div key={book.id}><Link to={`/${this.props.linkPath}books/${book.id}`}><Book book={book} /></Link></div>
    });
  }
}
