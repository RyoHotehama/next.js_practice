import {useState} from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
import Layout from '../../../components/layout';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const url = "https://pokeapi.co/api/v2/pokemon/" +id

  const [data, setData] = useState({types:[], stats:[], abilities:[]})
  const ImgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png"
fetch(url) 
  .then(res => res.json())
  .then(res => setData(res))

return (
  <div>
    <Layout title={"pokemonNo." + id}>
      <Link href = {{ pathname: '/poket/detail/[id]', query: { id: id -1 }}} passHref>
        <a>前へ</a>
      </Link>
    <div className="pokemon-wrap">
      <img src={ImgSrc} height="200" width="200" />
      <h3>図鑑No.{id}</h3>
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
    </Layout>
  </div>
)
}