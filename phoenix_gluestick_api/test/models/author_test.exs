defmodule PhoenixGluestickApi.AuthorTest do
  use PhoenixGluestickApi.ModelCase

  alias PhoenixGluestickApi.Author

  @valid_attrs %{age: 42, name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Author.changeset(%Author{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Author.changeset(%Author{}, @invalid_attrs)
    refute changeset.valid?
  end
end
