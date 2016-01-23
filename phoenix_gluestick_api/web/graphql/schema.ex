defmodule PhoenixGluestickApi.GraphQL.Schema do
  alias GraphQL.{Schema}
  alias GraphQL.Type.{ObjectType}
  alias PhoenixGluestickApi.GraphQL.{Book, Author}

  def schema do
    %Schema {
      query: %ObjectType {
        name: "RootQueryType",
        description: "The root query",
        fields: %{
          author: Author.author_query,
          authors: Author.authors_query,
          book: Book.book_query,
          books: Book.books_query
        }
      }
    }
  end
end
