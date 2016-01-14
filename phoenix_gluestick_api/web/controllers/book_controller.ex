defmodule PhoenixGluestickApi.BookController do
  use PhoenixGluestickApi.Web, :controller

  alias PhoenixGluestickApi.Book

  def index(conn, params) do
    books = Repo.all(index_query(params))
    render(conn, "index.json", books: books)
  end

  def show(conn, %{"id" => id}) do
    book = Repo.get!(Book, id)
    render(conn, "show.json", book: book)
  end

  defp index_query(%{"author_id" => author_id}) do
    from b in Book, where: b.author_id == ^author_id
  end

  defp index_query(%{}) do
    from Book
  end
end
