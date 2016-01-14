defmodule PhoenixGluestickApi.Repo.Migrations.CreateBook do
  use Ecto.Migration

  def change do
    create table(:books) do
      add :title, :string
      add :pages, :integer
      add :published, :integer
      add :author_id, references(:authors, on_delete: :nothing)

      timestamps
    end
    create index(:books, [:author_id])

  end
end
