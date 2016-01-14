defmodule PhoenixGluestickApi.Isbndb do
  use HTTPoison.Base

  @expected_fields ~w(
    isbn10
  )
  def process_url(url) do
    isbndb_key = Application.get_env(:phoenix_gluestick_api, :isbndb_key)
    "http://isbndb.com/api/v2/json/#{isbndb_key}/book/" <> url
  end

  def process_response_body(body) do
    body
    |> Poison.decode!
    |> Dict.get("data")
    |> List.first
    |> Map.take(@expected_fields)
  end
end
