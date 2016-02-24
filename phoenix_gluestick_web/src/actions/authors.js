import axios from 'axios';
import { setBooks } from './books';

export const SET_AUTHOR = "SET_AUTHOR";
export const GET_AUTHOR = "GET_AUTHOR";
export const GET_AUTHORS = "GET_AUTHORS";

export function setAuthor(author) {
  return {
    type: SET_AUTHOR,
    author: author
  };
}

export function getAuthor(authorId) {
  return {
    type: GET_AUTHOR,
    promise: new Promise((resolve) => {
      axios.get(`http://localhost:4000/authors/${authorId}`).then((response) => {
        resolve(response.data.data);
      });
    })
  };
}

export function getAuthors() {
  return {
    type: GET_AUTHORS,
    promise: new Promise((resolve) => {
      axios.get('http://localhost:4000/authors').then((response) => {
        resolve(response.data.data);
      });
    })
  };
}

export function getAuthorGraphQL(authorId) {
  return (dispatch) => {
    return new Promise((resolve) => {
      axios.get('http://localhost:4000/graphql', {
        params: {
          query: `{author(id: ${authorId}) {id,name,age,books{id,title,pages,published,author_id,cover_image_url}}}`
        }
      }).then((response) => {
        const { author } = response.data.data;
        const { books } = author;
        dispatch(setBooks(books));
        dispatch(setAuthor(author));
        resolve(response);
      });
    })
  };
}

export function getAuthorsGraphQL() {
  return {
    type: GET_AUTHORS,
    promise: new Promise((resolve) => {
      axios.get('http://localhost:4000/graphql', {
        params: {
          query: `{authors {id,name,age}}`
        }
      }).then((response) => {
        resolve(response.data.data.authors);
      });
    })
  };
}
