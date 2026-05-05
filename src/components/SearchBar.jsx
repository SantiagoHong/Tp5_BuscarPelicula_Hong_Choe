import { useEffect } from "react"
import api from "../services/api"
import ErrorMessage from "./ErrorMessage";
import "../styles/SearchBar.css";

function SearchBar({ setMovies, setLoading, setError}) {
  function buscar(){    
    let texto = document.querySelector('#movie').value;
    setError(null)

    if (texto === ""){
      setError( "Por favor, ingrese un término de búsqueda" )
    }
    
    setLoading(true)

    api.get(`?s=${texto}&apikey=e26944ed`)
        .then((response) => {
          if (response.data.Response === "False") {
            setError("Película no encontrada")
            setLoading(false)
          }
          if (response.data.Error != "Too many results.") {
            setMovies(response.data.Search)
            setLoading(false)
          } else {
            setError("Demasiados resultados, por favor refine su búsqueda")
            setLoading(false)
          }
        }).catch((error) => {
            setError("Ocurrió un error al buscar las películas")
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