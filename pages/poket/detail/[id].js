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
      <Link href = {{ pathname: '/poket/detail/[id]', query: { id: id -1 }}} passHref>
        <a>前へ</a>
      </Link>
      <ApiDetail id= {id}/>
    </Layout>
  </div>
)
}