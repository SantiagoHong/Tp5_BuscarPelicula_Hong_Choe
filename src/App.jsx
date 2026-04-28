import { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <section className="app">
      <SearchBar setMovies={setMovies} />
      <MovieList setMovies={setMovies} />
      <Loader />
    </section>
  )
}

export default App
