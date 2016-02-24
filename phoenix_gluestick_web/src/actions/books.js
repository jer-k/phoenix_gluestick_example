import axios from 'axios';
import { setAuthor } from './authors';

export const SET_BOOK = "SET_BOOK";
export const SET_BOOKS = "SET_BOOKS";
export const GET_BOOK = "GET_BOOK";
export const GET_BOOKS = "GET_BOOKS";

export function setBook(book) {
  return {
    type: SET_BOOK,
    book: book
  };
}

export function setBooks(books) {
  return {
    type: SET_BOOKS,
    books: books
  }
}

export function getBook(bookId) {
  return {
    type: GET_BOOK,
    promise: new Promise((resolve) => {
      axios.get(`http://localhost:4000/books/${bookId}`).then((response) => {
        resolve(response.data.data);
      });
    })
  };
}

export function getBooks() {
  return {
    type: GET_BOOKS,
    promise: new Promise((resolve) => {
      axios.get(`http://localhost:4000/books`).then((response) => {
        resolve(response.data.data);
      });
    })
  };
}

export function getAuthorBooks(authorId) {
  return {
    type: GET_BOOKS,
    promise: new Promise((resolve) => {
      axios.get(`http://localhost:4000/authors/${authorId}/books`).then((response) => {
        resolve(response.data.data);
      });
    })
  };
}

export function getBookGraphQL(bookId) {
  return (dispatch) => {
    return new Promise((resolve) => {
      axios.get('http://localhost:4000/graphql', {
        params: {
          query: `{book(id: ${bookId}) {id,title,pages,published,author_id,cover_image_url,author{id,name,age}}}`
        }
      }).then((response) => {
        const { book } = response.data.data;
        const { author } = book;
        dispatch(setBook(book));
        dispatch(setAuthor(author));
        resolve(response);
      });
    })
  };
}

export function getBooksGraphQL() {
  return {
    type: GET_BOOKS,
    promise: new Promise((resolve) => {
      axios.get('http://localhost:4000/graphql', {
        params: {
          query: `{books {id,title,pages,published,cover_image_url}}`
        }
      }).then((response) => {
        resolve(response.data.data.books);
      });
    })
  };
}
