import axios from "axios";
import {useState, useEffect} from "react"
import ApiWrap from './pokemonWrap'

function apiClient (props) {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=" + props.limit + "&offset=" + props.offset
  const [data, setData] = useState({results: []})

  useEffect(() => {
    try {
      axios.get(
      url
      ).then(res => setData(res.data))
      console.log('ok')
    } catch {
      console.log('miss')
    }
  },[props])
  
  return (
    <div className="row">
        {data.results.map((value, key) => (
          <ApiWrap url = {value.url} name = {value.name} key = {key}/>
        ))}
    </div>
  )
}

export default apiClient