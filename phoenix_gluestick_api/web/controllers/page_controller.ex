defmodule PhoenixGluestickApi.PageController do
  use PhoenixGluestickApi.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
