# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     PhoenixGluestickApi.Repo.insert!(%PhoenixGluestickApi.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias PhoenixGluestickApi.{Repo, Author}

Repo.transaction fn ->
  george = Repo.insert!(%Author{name: "George R.R. Martin", age: 67})

  books = [
    %{title: "A Game of Thrones", pages: 694, published: 1996},
    %{title: "A Clash of Kings", pages: 768, published: 1998},
    %{title: "A Storm of Swords", pages: 973, published: 2000},
    %{title: "A Feast for Crows", pages: 753, published: 2005},
    %{title: "A Dance with Dragons", pages: 1004, published: 2012}
  ]

  Enum.each(books, fn attrs ->
    book = Ecto.build_assoc(george, :books, attrs)
    Repo.insert!(book)
  end)
end

Repo.transaction fn ->
  jk = Repo.insert!(%Author{name: "J.K. Rowling", age: 50})

  books = [
    %{title: "Harry Potter and the Sorcerer's Stone", pages: 309, published: 1997},
    %{title: "Harry Potter and the Chamber Of Secrets", pages: 341, published: 1998},
    %{title: "Harry Potter and the Prisoner of Azkaban", pages: 435, published: 1999},
    %{title: "Harry Potter and the Goblet of Fire", pages: 734, published: 2000},
    %{title: "Harry Potter and the Order of the Phoenix", pages: 870, published: 2003},
    %{title: "Harry Potter and the Half-Blood Prince", pages: 652, published: 2005},
    %{title: "Harry Potter and the Deathly Hallows", pages: 759, published: 2007}
  ]

  Enum.each(books, fn attrs ->
    book = Ecto.build_assoc(jk, :books, attrs)
    Repo.insert!(book)
  end)
end
