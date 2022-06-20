import axios from "axios";
import {useState, useEffect} from "react"
import Link from 'next/link'
import NameConversion from './nameConversion'

function apiWrap (props) {
  const ImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const style = ".png"
  const [data, setData] = useState({id: 0})

  useEffect(() => {
    try {
      axios.get(
      props.url
      ).then(res => setData(res.data))
    } catch {
      console.log('miss')
    }
  },[props])

  
  return (
    <>
    {data.id > 0 && 
      <div className="col-sm-3 border rounded pokemon-fullwrap m-3">
        <Link href = {{ pathname: '/poket/detail/[id]', query: { id: data.id}}} passHref>
          <a>
            <div>
              <img key={props.key} src={ImgSrc + data.id + style} height="200" width="200" />
            </div>
            <div>
              <NameConversion id = {data.id} key = {props.key}/>
            </div>
          </a>
        </Link>
      </div>
    }
  </>
  )
}

export default apiWrap