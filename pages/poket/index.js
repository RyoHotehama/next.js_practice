import {useState, useEffect} from "react"
import { useRouter } from "next/router";
import Link from 'next/link'

import Layout from '../../components/layout'
 
export default function Home() {
  const router = useRouter();
  const { area_id, limit, offset } = router.query;
const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=898&offset=0")
const [data, setData] = useState({results:[]})
const [id, setId] = useState(1)

useEffect(() => {
  if (!area_id == 0) {
    setId(Number(area_id))
  }
  if (!limit == 0 && !offset == 0) {
    setUrl("https://pokeapi.co/api/v2/pokemon/?limit=" + limit +"&offset=" + offset)
  }
  
},[router.query])

fetch(url) 
  .then(res => res.json())
  .then(res => setData(res))

const ImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

const style = ".png"

return (
  <div>
    <Layout title="Top">
      <div className="row">
      {data.results.map((value, key) => (
        <div className="col-sm-3 border rounded pokemon-fullwrap m-3">
          <Link href = {{ pathname: '/poket/detail/[id]', query: { id: key + id }}} passHref>
            <a>
              <div>
                <img src = {ImgSrc + (key + id) + style} height="200" width="200"/>
              </div>
              <h3 key= {key} class="text-center">{value.name}</h3>
            </a>
          </Link>
        </div>
      ))}
      </div>
    </Layout>
  </div>
)
}
