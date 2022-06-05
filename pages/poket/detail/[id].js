import {useState} from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const url = "https://pokeapi.co/api/v2/pokemon/" +id

  const [data, setData] = useState([])
fetch(url) 
  .then(res => res.json())
  .then(res => setData(res))

return (
  <div>
    {data.name}
  </div>
)
}