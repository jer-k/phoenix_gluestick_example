defmodule PhoenixGluestickApi.Repo.Migrations.CreateAuthor do
  use Ecto.Migration

  def change do
    create table(:authors) do
      add :name, :string
      add :age, :integer

      timestamps
    end

  end
end
