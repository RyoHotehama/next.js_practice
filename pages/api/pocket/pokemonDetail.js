import axios from "axios";
import {useState, useEffect} from "react"
import Link from 'next/link'
import NameConversion from './nameConversion'
import Status from './status'
import TypeConversion from './typeConversion'
import AbilityConversion from './abilityConversion'

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
    <NameConversion id = {props.id} title ="名前："/>
    <h3>タイプ：
      {data.types.map((value,key) => (
        <>
          <TypeConversion url = {value.type.url} type_name = {value.type.name} />
        </>
      ))}
    </h3>
    <h3>高さ：{data.height /10} m</h3>
    <h3>重さ：{data.weight /10} kg</h3>
    <h3>特性：
    {data.abilities.map((value,key) => (
      <>
      <AbilityConversion url = {value.ability.url} name = {value.ability.name} />
      </>
    ))}
    </h3>
  </div>
  <table border="2" align="center" className="mt-5">
        {data.stats.map((value, key) => (
          <tr>
            <Status url = {value.stat.url} base_stat = {value.base_stat} />
          </tr>
        ))}
  </table>
  </>
  )
}

export default apiDetail