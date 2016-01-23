defmodule PhoenixGluestickApi.Author do
  use PhoenixGluestickApi.Web, :model

  alias PhoenixGluestickApi.{ Repo }

  schema "authors" do
    field :name, :string
    field :age, :integer

    has_many :books, PhoenixGluestickApi.Book
    timestamps
  end

  @required_fields ~w(name age)
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

  def get_author(%{id: id}) do
    Repo.get!(__MODULE__, id)
  end

  def get_authors do
    Repo.all(__MODULE__)
  end
end
