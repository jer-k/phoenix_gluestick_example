defmodule PhoenixGluestickApi.GraphQL.Book do
  alias PhoenixGluestickApi.{Book}

  def type do
    %GraphQL.Type.ObjectType {
      name: "Book",
      description: "Paper thing with words.",
      fields: quote do %{
          id: %{type: %GraphQL.Type.Int{}},
          name: %{type: %GraphQL.Type.String{}},
          pages: %{type: %GraphQL.Type.Int{}},
          author_id: %{type: %GraphQL.Type.Int{}},
           cover_image_url: %{
             type: %GraphQL.Type.String{},
             resolve: fn(book, _, _) -> PhoenixGluestickApi.Book.cover_image_url(book) end
           },
          author: %{
            type: PhoenixGluestickApi.GraphQL.Author.type,
            resolve: fn(book, _, _) -> PhoenixGluestickApi.Author.get_author(%{id: book.author_id}) end
          }
      } end
    }
  end

  def book_query do
    %{
      type: type,
      args: %{
        id: %{type: %GraphQL.Type.NonNull{ofType: %GraphQL.Type.String{}}}
      },
      resolve: fn(_, args, _) -> Book.get_book(args) |> serialize end
    }
  end

  def books_query do
    %{
      type: %GraphQL.Type.List{ofType: type},
      args: %{},
      resolve: fn(_, _, _) -> Book.get_books |> Enum.map(&(serialize(&1))) end
    }
  end

  def serialize(book) do
    Map.take(book, [:id, :title, :pages, :author_id])
  end
end
