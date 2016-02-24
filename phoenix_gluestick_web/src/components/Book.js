import React, { Component, PropTypes } from "react";

export default class Book extends Component {
  render () {
    const { book: {title, pages, published, cover_image_url } } = this.props;
    const imageUrl = cover_image_url || "";
    const thumbnailUrl = `${imageUrl.substr(0, imageUrl.lastIndexOf('.'))}-M.jpg`
    return (
      <div>
        <img src={thumbnailUrl} />
        <p>{title}</p>
        <p>{pages}</p>
        <p>{published}</p>
      </div>
    );
  }
}
