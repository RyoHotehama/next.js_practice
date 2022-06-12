import axios from "axios";
import {useState, useEffect} from "react"
import Link from 'next/link'

function apiDetail (props) {
  const ImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + props.id + ".png"
  const url = "https://pokeapi.co/api/v2/pokemon/" + props.id
  const [data, setData] = useState({types:[], stats:[], abilities:[]})


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
    <>
    <div className="pokemon-wrap">
    <img src={ImgSrc} height="200" width="200" />
    <h3>図鑑No.{props.id}</h3>
    <h3>名前：{data.name}</h3>
    <h3>タイプ：
      {data.types.map((value,key) => (
        <span key={key} className={value.type.name}>{value.type.name}</span>
      ))}
    </h3>
    <h3>高さ：{data.height /10} m</h3>
    <h3>重さ：{data.weight /10} kg</h3>
    <h3>特性：
    {data.abilities.map((value,key) => (
      <span key={key}>{value.ability.name}</span>
    ))}
    </h3>
  </div>
  <table border="2" align="center" className="mt-5">
        {data.stats.map((value, key) => (
          <tr>
            <th className='p-2 status'>{value.stat.name}</th>
            <th key={key} className='p-2'>{value.base_stat}</th>
          </tr>
        ))}
  </table>
  </>
  )
}

export default apiDetail