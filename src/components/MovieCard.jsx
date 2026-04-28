
function MovieCard({ movie, setMovie}) {
  function verDetalles() {
    movie.get(`?i=${movie.imdbID}&apikey=e26944ed`)
      .then((response) => {
        setMovie(response.data)
    })
  }

  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
      <button type="submit" onClick={() => verDetalles()}>Ver Detalles</button>
    </div>
  )
}

export default MovieCard