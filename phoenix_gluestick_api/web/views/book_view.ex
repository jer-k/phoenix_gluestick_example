defmodule PhoenixGluestickApi.BookView do
  use PhoenixGluestickApi.Web, :view

  alias PhoenixGluestickApi.{ Book }

  def render("index.json", %{books: books}) do
    %{data: render_many(books, PhoenixGluestickApi.BookView, "book.json")}
  end

  def render("show.json", %{book: book}) do
    %{data: render_one(book, PhoenixGluestickApi.BookView, "book.json")}
  end

  def render("book.json", %{book: book}) do
    %{id: book.id,
      title: book.title,
      pages: book.pages,
      published: book.published,
      author_id: book.author_id,
      cover_image_url: Book.cover_image_url(book)}
  end
end
