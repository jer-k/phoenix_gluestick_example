import { SET_AUTHOR, GET_AUTHOR, GET_AUTHORS } from "../actions/authors";

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTHOR:
      let author = action.author;
      return {[author.id]: author};
    case GET_AUTHOR:
      return {[action.value['id']]: action.value};
    case GET_AUTHORS:
      const authors = {};
      action.value.forEach((author) => {
        authors[author.id] = author;
      });
      return authors;
    default:
      return state;
  }
};
