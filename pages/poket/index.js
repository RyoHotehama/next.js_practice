import { useRouter } from "next/router";
import ApiClient from '../../components/pocket/pokemonList'
import Layout from '../../components/layout'
 
export default function Home() {
  const router = useRouter();
  const { area_id, limit, offset } = router.query;

  return (
    <div>
      <Layout title="Top">
        <ApiClient id = {area_id} limit = {limit} offset = {offset} />
      </Layout>
    </div>
  )
}
