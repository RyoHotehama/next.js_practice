import {useState} from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
import Layout from '../../../components/layout';
import ApiDetail from '../../api/pocket/pokemonDetail'

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

return (
  <div>
    <Layout title={"pokemonNo." + id}>
      {id > 1 &&<Link href = {{ pathname: '/poket/detail/[id]', query: { id: id -1 }}} passHref>
        <a>前へ</a>
      </Link>}
      {id <= 1 && <div>前へ</div>}
      <ApiDetail id= {id}/>
      <Link href = {{ pathname: '/poket/detail/[id]', query: { id: Number(id) + 1 }}} passHref>
        <a>次へ</a>
      </Link>
    </Layout>
  </div>
)
}