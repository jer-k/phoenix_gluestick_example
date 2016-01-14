defmodule PhoenixGluestickApi.AuthorControllerTest do
  use PhoenixGluestickApi.ConnCase

  alias PhoenixGluestickApi.Author
  @valid_attrs %{age: 42, name: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, author_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    author = Repo.insert! %Author{}
    conn = get conn, author_path(conn, :show, author)
    assert json_response(conn, 200)["data"] == %{"id" => author.id,
      "name" => author.name,
      "age" => author.age}
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, author_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, author_path(conn, :create), author: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Author, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, author_path(conn, :create), author: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    author = Repo.insert! %Author{}
    conn = put conn, author_path(conn, :update, author), author: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Author, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    author = Repo.insert! %Author{}
    conn = put conn, author_path(conn, :update, author), author: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    author = Repo.insert! %Author{}
    conn = delete conn, author_path(conn, :delete, author)
    assert response(conn, 204)
    refute Repo.get(Author, author.id)
  end
end
