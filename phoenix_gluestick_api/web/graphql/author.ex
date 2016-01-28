defmodule PhoenixGluestickApi.GraphQL.Author do
  alias PhoenixGluestickApi.{Author}

  def type do
    %GraphQL.Type.ObjectType {
      name: "Author",
      description: "The author of a book.",
      fields: quote do %{
        id: %{type: %GraphQL.Type.Int{}},
        name: %{type: %GraphQL.Type.String{}},
        age: %{type: %GraphQL.Type.Int{}},
        books: %{
          type: %GraphQL.Type.List{ofType: PhoenixGluestickApi.GraphQL.Book.type},
          resolve: fn(author, _, _) -> PhoenixGluestickApi.Book.get_books(%{author_id: author.id}) end
        }
      } end
    }
  end

  def author_query do
    %{
      type: type,
      args: %{
        id: %{type: %GraphQL.Type.NonNull{ofType: %GraphQL.Type.String{}}}
      },
      resolve: fn(_, args, _) -> Author.get_author(args) end
    }
  end

  def authors_query do
    %{
      type: %GraphQL.Type.List{ofType: type},
      args: %{},
      resolve: fn(_, _, _) -> Author.get_authors end
    }
  end
end
