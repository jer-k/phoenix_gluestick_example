import React, { Component, PropTypes } from "react";
import { Link } from "react-router";

import Author from "./Author";

export default class AuthorList extends Component {
  static propTypes = {
          description: PropTypes.string
      }

  static defaultProps = {
        linkPath: ""
      }

  render () {
    const authors = this.renderAuthors();
    return (
      <div>
        {authors}
      </div>
    );
  }

  renderAuthors() {
    const { authors } = this.props;
    if (!authors) return;

    return Object.values(authors).map((author) => {
      return <div key={author.id}><Link to={`/${this.props.linkPath}authors/${author.id}`}><Author author={author} /></Link></div>
    });
  }
}
