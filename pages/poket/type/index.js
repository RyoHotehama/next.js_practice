import {useState, useEffect} from "react"
import { useRouter } from "next/router";
import Layout from '../../../components/layout'
import ApiType from '../../api/pocket/pokemonType'
 
export default function Home() {
  const router = useRouter();
  const {type_id} = router.query;

  return (
    <div>
      <Layout title="Top">
        <ApiType type_id = {type_id} />
      </Layout>
    </div>
  )
}