defmodule Backend.MemeView do
  use Backend.Web, :view

  def render("index.json", %{memes: memes}) do
    %{data: render_many(memes, Backend.MemeView, "meme.json")}
  end

  def render("show.json", %{meme: meme}) do
    %{data: render_one(meme, Backend.MemeView, "meme.json")}
  end

  def render("meme.json", %{meme: meme}) do
    %{id: meme.id,
      title: meme.title,
      image: meme.image,
      rating: meme.rating}
  end
end
