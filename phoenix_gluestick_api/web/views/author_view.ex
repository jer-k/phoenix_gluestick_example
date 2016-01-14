defmodule PhoenixGluestickApi.AuthorView do
  use PhoenixGluestickApi.Web, :view

  def render("index.json", %{authors: authors}) do
    %{data: render_many(authors, PhoenixGluestickApi.AuthorView, "author.json")}
  end

  def render("show.json", %{author: author}) do
    %{data: render_one(author, PhoenixGluestickApi.AuthorView, "author.json")}
  end

  def render("author.json", %{author: author}) do
    %{id: author.id,
      name: author.name,
      age: author.age}
  end
end
