import api from "../services/api"
import "../styles/MovieCard.css";

function MovieCard({ movie, setMovie }) {
  function verDetalles() {
    api.get(`?i=${movie.imdbID}&apikey=e26944ed`)
      .then((response) => {
        setMovie(response.data)
    })
  }

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p className="muted">{movie.Year}</p>
      <p className="muted">{movie.Type}</p>
      <button className="card-btn" type="button" onClick={() => verDetalles()}>Ver Detalles</button>
    </div>
  )
}

export default MovieCard