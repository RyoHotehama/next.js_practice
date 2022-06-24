import axios from "axios";
import {useState, useEffect} from "react"
import NameConversion from './nameConversion'
import Status from './status'
import TypeConversion from './typeConversion'
import AbilityConversion from './abilityConversion'

function apiDetail (props) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + props.id
  const [data, setData] = useState({types:[], stats:[], abilities:[], sprites:[], species:[]})

  useEffect(() => {
    (async () => {
      await axios.get(
        url
      ).then(res => setData(res.data))
      console.log('pokemonDetailAPI接続完了')
    })();
  },[props])

  
  return (
    <>
    {data.species.url &&
      <div className="pokemon-wrap col-7">
      <img src={data.sprites.front_default} height="300" width="300" />
      <h3>図鑑No.{data.id}</h3>
      <div>
        <NameConversion url = {data.species.url} title ="名前："/>
        <h3>タイプ：
          {data.types.map((value,key) => (
            <span key={key}>
              <TypeConversion url = {value.type.url} type_name = {value.type.name} />
            </span>
          ))}
        </h3>
        <h3>高さ：{data.height /10} m</h3>
        <h3>重さ：{data.weight /10} kg</h3>
        <h3>特性：
         {data.abilities.map((value,key) => (
            <span key={key}>
              <AbilityConversion url = {value.ability.url} name = {value.ability.name} />
            </span>
          ))}
        </h3>
      </div>
      <table border="2" align="center" className="mt-5">
        <tbody>
          {data.stats.map((value, key) => (
            <tr key= {key}>
              <Status url = {value.stat.url} base_stat = {value.base_stat} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    }
  </>
  )
}

export default apiDetail