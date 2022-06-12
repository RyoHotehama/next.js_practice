import {useState, useEffect} from "react"
import { useRouter } from "next/router";
import ApiClient from '../api/pocket/pokemonList'
import Layout from '../../components/layout'
 
export default function Home() {
  const router = useRouter();
  const { area_id, limit, offset } = router.query;
  const [id, setId] = useState(1)
  const [limits, setLimits] = useState(893)
  const [offsets, setOffsets] = useState(0)

  useEffect(() => {
    if (!area_id == 0) {
      setId(Number(area_id))
    }
    if (!limit == 0) {
      setLimits(limit)
    }
    if (!offset) {
      setOffsets(offset)
    }
  },[router.query])

  return (
    <div>
      <Layout title="Top">
        <ApiClient id = {id} limit = {limits} offset = {offsets}/>
      </Layout>
    </div>
  )
}
