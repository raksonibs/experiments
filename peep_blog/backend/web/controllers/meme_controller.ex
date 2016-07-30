defmodule Backend.MemeController do
  use Backend.Web, :controller

  alias Backend.Meme

  def index(conn, _params) do
    memes = Repo.all(Meme)
    render(conn, "index.json", memes: memes)
  end

  def create(conn, %{"meme" => meme_params}) do
    changeset = Meme.changeset(%Meme{}, meme_params)

    case Repo.insert(changeset) do
      {:ok, meme} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", meme_path(conn, :show, meme))
        |> render("show.json", meme: meme)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Backend.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    meme = Repo.get!(Meme, id)
    render(conn, "show.json", meme: meme)
  end

  def update(conn, %{"id" => id, "meme" => meme_params}) do
    meme = Repo.get!(Meme, id)
    changeset = Meme.changeset(meme, meme_params)

    case Repo.update(changeset) do
      {:ok, meme} ->
        render(conn, "show.json", meme: meme)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Backend.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    meme = Repo.get!(Meme, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(meme)

    send_resp(conn, :no_content, "")
  end
end
