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

  # Other scopes may use custom stacks.
  # scope "/api", PhoenixGluestickApi do
  #   pipe_through :api
  # end
end
