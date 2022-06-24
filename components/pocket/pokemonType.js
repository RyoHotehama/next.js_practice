import axios from "axios";
import {useState, useEffect} from "react"
import Link from 'next/link'
import ApiWrap from './pokemonWrap'

function apiType (props) {
  const url = "https://pokeapi.co/api/v2/type/" + props.type_id
  const [data, setData] = useState({pokemon:[]})

  useEffect(() => {
    try {
      axios.get(
      url
      ).then(res => setData(res.data))
    } catch {
      console.log('miss')
    }
  }, [props])

  return (
    <div className="row ml-3">
        {data.pokemon.map((value, key) => (
          <div key={key} className = "col-sm-3 border rounded pokemon-fullwrap m-3">
            <ApiWrap url = {value.pokemon.url} name = {value.pokemon.name} />
          </div>
        ))}
    </div>
  )
}
export default apiType