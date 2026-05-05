import "../styles/MovieDetail.css";

function MovieDetail({ movie, setMovie }) {

  return (
    <div className="movie-detail">
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="info">
        <h2>{movie.Title}</h2>
        <p className="muted">{movie.Year} • {movie.Runtime} • {movie.Type}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actores:</strong> {movie.Actors}</p>
        <p className="plot">{movie.Plot}</p>
        <p className="muted">{movie.Language} — {movie.Country}</p>
        <p className="muted">IMDb: {movie.imdbRating}</p>

        <button className="card-btn" onClick={() => setMovie(null)}>Volver</button>
      </div>
    </div>
  )
}

export default MovieDetail