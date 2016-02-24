import React from "react";
import { Route, IndexRoute } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "gluestick-shared";

import MasterLayout from "../components/MasterLayout";
import HomeApp from "../containers/HomeApp";
import NoMatchApp from "../containers/NoMatchApp";

import AuthorsContainer from "../containers/AuthorsContainer";
import AuthorContainer from "../containers/AuthorContainer";
import BooksContainer from "../containers/BooksContainer";
import BookContainer from "../containers/BookContainer";

import GraphiQL from "../components/GraphiQL";
import AuthorsGraphQLContainer from "../containers/AuthorsGraphQLContainer";
import AuthorGraphQLContainer from "../containers/AuthorGraphQLContainer";
import BooksGraphQLContainer from "../containers/BooksGraphQLContainer";
import BookGraphQLContainer from "../containers/BookGraphQLContainer";

export default (
  <Route name="app" component={MasterLayout} path="/">
    <IndexRoute name="home" component={HomeApp} />
    <Route name="authors" component={AuthorsContainer} path="/authors" />
    <Route name="author" component={AuthorContainer} path="/authors/:authorId" />
    <Route name="books" component={BooksContainer} path="/books" />
    <Route name="book" component={BookContainer} path="/books/:bookId" />

    <Route name="graphiql" component={GraphiQL} path="/graphiql" />
    <Route name="graphql/authors" component={AuthorsGraphQLContainer} path="/graphql/authors" />
    <Route name="graphql/author" component={AuthorGraphQLContainer} path="/graphql/authors/:authorId" />
    <Route name="graphql/books" component={BooksGraphQLContainer} path="/graphql/books" />
    <Route name="graphql/book" component={BookGraphQLContainer} path="/graphql/books/:bookId" />
    
    <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp}/>
  </Route>
);
