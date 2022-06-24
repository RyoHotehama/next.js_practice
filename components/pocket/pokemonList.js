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
      console.log('pokemonListAPI接続完了')
    } catch {
      console.log('pokemonListAPI接続失敗')
    }
  },[props])
  
  return (
    <div className="row ml-3">
        {data.results.map((value, key) => (
          <div key={key} className = "col-sm-3 border rounded pokemon-fullwrap m-3">
            <ApiWrap url = {value.url} name = {value.name} />
          </div>
        ))}
    </div>
  )
}

export default apiClient