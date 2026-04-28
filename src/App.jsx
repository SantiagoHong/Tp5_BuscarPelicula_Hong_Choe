import { useState, useEffect, use } from 'react'
import MovieList from './components/MovieList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <section className="app">
      <SearchBar setMovies={setMovies} setLoading={setLoading} setError={setError} />
      <MovieList movies={movies} SetMovies={setMovies} />
    </section>
  )
}

export default App
