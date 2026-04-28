import MovieCard from "./MovieCard"

function MovieList({ movies, setMovies }) {
  
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} setMovie={setMovies}/>
      ))}
    </div>
  )
}

export default MovieList