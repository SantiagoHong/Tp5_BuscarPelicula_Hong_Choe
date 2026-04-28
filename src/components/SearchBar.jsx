import { useEffect } from "react"
import api from "../services/api"

function SearchBar({ setMovies }) {
    function handleSubmit(e) {
        e.preventDefault()

        useEffect(() => {
            api.get('&t=${movie}').then((response) => {
                setMovies(response.data)
                setLoading(false)
            }).catch((error) => {
                console.error('Error fetching movies:', error)
                setLoading(false)
            })
        }, [])
    }

  return (
    <div onSubmit = {(e) => handleSubmit(e)}>
        <input type="text" name="movie" placeholder="Search for movies..." />
        <button type="submit" >Buscar Películas</button>
    </div>
  )
}

export default SearchBar