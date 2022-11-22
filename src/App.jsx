import axios from "axios";

const getData = async () => await axios("http://localhost:5173/api/products/1").then(response => response.json())

function App() {
  const data = getData()
  return <h1>{data}</h1>
}

export default App;
