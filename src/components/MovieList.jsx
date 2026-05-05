import MovieCard from "./MovieCard"
import MovieDetail from "./MovieDetail"
import ErrorMessage from "./ErrorMessage"
import "../styles/MovieList.css";

function MovieList({ movies, setMovies, movie, setMovie , setError, error}) {

  return (
    <div className="movie-grid">
      {error != null ? (
        <ErrorMessage message={error} />
      ) : (
        movie == null ? (
          movies.map((m) => (
            <MovieCard key={m.imdbID} movie={m} setMovies={setMovies} setMovie={setMovie} />
          ))
        ) : (
          <MovieDetail movie={movie} setMovie={setMovie}/>
        )
      )}
      
    </div>
  )
}

export default MovieList