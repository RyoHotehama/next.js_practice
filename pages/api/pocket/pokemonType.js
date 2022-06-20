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
    <div className="row">
        {data.pokemon.map((value) => (
          <ApiWrap url = {value.pokemon.url} name = {value.pokemon.name} />
        ))}
    </div>
  )
}
export default apiType