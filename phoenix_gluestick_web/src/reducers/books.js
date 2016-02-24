import { SET_BOOK, SET_BOOKS, GET_BOOK, GET_BOOKS } from "../actions/books";

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
  const books = {};
  switch (action.type) {
    case SET_BOOK:
      let book = action.book;
      return {[book.id]: book};
    case SET_BOOKS:
      action.books.forEach((book) => {
        books[book.id] = book;
      });
      return {...books};
    case GET_BOOK:
      return {[action.value['id']]: action.value};
    case GET_BOOKS:
      action.value.forEach((book) => {
        books[book.id] = book;
      });
      return books;
    default:
      return state;
  }
};
