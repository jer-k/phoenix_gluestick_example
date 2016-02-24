import React, { Component, PropTypes } from "react";

export default class Author extends Component {
  render () {
    const { author: { name, age } } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    );
  }
}
