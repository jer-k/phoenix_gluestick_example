defmodule PhoenixGluestickApi.Router do
  use PhoenixGluestickApi.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PhoenixGluestickApi do
    pipe_through :api

    resources "authors", AuthorController, only: [:index, :show] do
      resources "books", BookController, only: [:index]
    end

    resources "books", BookController, only: [:index, :show]
  end

  scope "/graphql" do
    pipe_through :api

    forward "/", GraphQL.Plug.Endpoint, schema: {PhoenixGluestickApi.GraphQL.Schema, :schema}
  end
end
