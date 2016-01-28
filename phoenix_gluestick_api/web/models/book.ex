defmodule PhoenixGluestickApi.Book do
  use PhoenixGluestickApi.Web, :model

  alias PhoenixGluestickApi.{ Isbndb, Repo }

  schema "books" do
    field :title, :string
    field :pages, :integer
    field :published, :integer
    belongs_to :author, PhoenixGluestickApi.Author

    timestamps
  end

  @required_fields ~w(title pages published)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end

  def cover_image_url(book) do
    #May be an incomplete case for creating perfect slugs, but it works with the seeded books
    slugged_title = String.replace(book.title, "'", "") |> Slugger.slugify_downcase(?_)

    ConCache.get_or_store(:phoenix_gluestick_cache, slugged_title, fn() ->
      Isbndb.start
      %{"isbn10" => isbn} = Isbndb.get!(slugged_title).body
      "http://covers.openlibrary.org/b/isbn/#{isbn}.jpg"
    end)
  end

  def get_book(%{id: id}) do
   Repo.get!(__MODULE__, id)
  end

  def get_books do
    Repo.all(__MODULE__)
  end

  def get_books(%{author_id: author_id}) do
    Repo.all(from b in __MODULE__, where: b.author_id == ^author_id)
  end
end
