//import Pokemon from './poketApi'

import {useState} from "react";
 
export default function Home() {
const url = "https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0"

const [data, setData] = useState({results:[]})
fetch(url) 
  .then(res => res.json())
  .then(res => setData(res))

return (
  <div>
    {data.results.map((values) => (
      <p>{values.name}</p>
    ))}
  </div>
)
}
