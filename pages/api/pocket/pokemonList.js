import axios from "axios";
import {useState, useEffect} from "react"
import Link from 'next/link'

function apiClient (props) {
  const ImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const style = ".png"
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=" + props.limit + "&offset=" + props.offset
  const [data, setData] = useState({results: []})


  useEffect(() => {
    try {
      axios.get(
      url
      ).then(res => setData(res.data))
    } catch {
      console.log('miss')
    }
  },[props])
  
  return (
    <div className="row">
        {data.results.map((value, key) => (
          <div className="col-sm-3 border rounded pokemon-fullwrap m-3">
            <Link href = {{ pathname: '/poket/detail/[id]', query: { id: key + props.id }}} passHref>
              <a>
                <div>
                  <img src = {ImgSrc + (key + props.id) + style} height="200" width="200"/>
                </div>
                <h3 key= {key} class="text-center">{value.name}</h3>
              </a>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default apiClient