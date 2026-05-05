import "../styles/Loader.css";
import loadingImg from "../images/loading.webp";

function Loader() {

  return <img className="loader" src={loadingImg} alt="Loading..." />
}

export default Loader