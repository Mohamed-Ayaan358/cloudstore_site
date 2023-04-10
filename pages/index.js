import Navbar from "../components/Navbar";
import axios from "axios"

export default function Home() {

  const getproducts = () => {
    axios.get(
      ""
    )

  }

  return (
    <div className="center">
      <h2>Home Page</h2>
      <button onClick={getproducts}></button>
    </div>
  );
}
