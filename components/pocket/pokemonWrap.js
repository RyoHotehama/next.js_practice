import axios from "axios";
import {useState, useEffect} from "react"
import Link from 'next/link'
import NameConversion from './nameConversion'

function apiWrap (props) {
  const [data, setData] = useState({id: 0, sprites:[], species:[]})

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
      <div>
        <Link href = {{ pathname: '/poket/detail/[id]', query: { id: data.id}}} passHref>
          <a>
            <div>
              {data.sprites.front_default && 
                <img src={data.sprites.front_default} height="200" width="200" />
              }
              {!data.sprites.front_default && 
                <img height="200" width="200" />
              }
            </div>
            <div>
              <NameConversion url = {data.species.url}/>
            </div>
          </a>
        </Link>
      </div>
    }
  </>
  )
}

export default apiWrap