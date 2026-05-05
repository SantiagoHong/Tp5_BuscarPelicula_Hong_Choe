import { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import Loader from './components/Loader'
import SearchBar from './components/SearchBar'
import './App.css'
import api from './services/api'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    api.get(`?s=superman&apikey=e26944ed`)
      .then((response) => {
        setMovies(response.data.Search)
      })
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <section className="app">
      <SearchBar setMovies={setMovies} setLoading={setLoading} setError={setError}/>
      <MovieList movies={movies} setMovies={setMovies} movie={movie} setMovie={setMovie} setError={setError} error = {error}/>
    </section>
  )
}

export default App
