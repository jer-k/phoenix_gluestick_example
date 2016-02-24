import React, { Component, PropTypes } from "react";
import { Link } from 'react-router'

export default class Home extends Component {
  render () {
    return (
      <div>
        <p>Welcome to the Fantasy Novel Index</p>
        <div>Rest Based Requests</div>
        <div><Link to={'/authors'}>Authors</Link></div>
        <div><Link to={'/books'}>Books</Link></div>
        <br />
        <div>GraphQL Based Requests</div>
        <div><Link to={'/graphql/authors'}>Authors</Link></div>
        <div><Link to={'/graphql/books'}>Books</Link></div>
        <br />
        <div>Or Play With GraphiQL</div>
        <div><Link to={'/graphiql'}>GraphiQL</Link></div>
      </div>
    );
  }
}
