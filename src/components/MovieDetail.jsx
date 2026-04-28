function MovieDetail({ movie , setMovie}) {

  setMovie(movie)


  return (
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
      <p>{movie.Director}</p>
      {movie.Actors.map((actor) => (
        <p key={actor}>{actor}</p>
      ))}
    </div>
  )
}

export default MovieDetail