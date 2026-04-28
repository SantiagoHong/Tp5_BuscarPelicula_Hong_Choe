import { useEffect } from "react"
import api from "../services/api"

function SearchBar({ setMovies, setLoading, setError }) {
  function buscar(){        
    let texto = document.querySelector('#movie').value;

    setLoading(true)

    api.get(`?s=${texto}&apikey=e26944ed`)
        .then((response) => {
            setMovies(response.data.Search)
            setLoading(false)
        })
        .catch((error) => {
            console.error('Error al cargar las películas:', error)
            setError('Error al cargar las películas')
            setLoading(false)
        })
  }  

  return (
    <form>
        <input type="text" name="movie" id="movie" placeholder="Search for movies..." />
        <button type="submit" onClick={() => buscar()}>Buscar Películas</button>
    </form>
  )
}

export default SearchBar