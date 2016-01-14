defmodule PhoenixGluestickApi.AuthorController do
  use PhoenixGluestickApi.Web, :controller

  alias PhoenixGluestickApi.Author

  def index(conn, _params) do
    authors = Repo.all(Author)
    render(conn, "index.json", authors: authors)
  end

  def show(conn, %{"id" => id}) do
    author = Repo.get!(Author, id)
    render(conn, "show.json", author: author)
  end
end
