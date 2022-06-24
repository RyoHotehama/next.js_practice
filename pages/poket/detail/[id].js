import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/layout';
import ApiDetail from '../../../components/pocket/pokemonDetail'

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

return (
  <div>
    <Layout title={"pokemonNo." + id}>
      {id > 1 &&
      <div className="d-flex align-items-center col-1">
        <Link href = {{ pathname: '/poket/detail/[id]', query: { id: id -1 }}} passHref>
        <a>
          <Image src="/image/left-red.png" alt="pokemon-logo" width={50} height={200} />
        </a>
      </Link>
      </div>}
      {id <= 1 && 
      <div className="d-flex align-items-center col-1">
        <Image src="/image/glay.png" alt="pokemon-logo" width={50} height={200} />
      </div>
      }
      {id > 0 &&
        <ApiDetail id= {id}/>
      }
        <div className="d-flex align-items-center col-1">
        <Link href = {{ pathname: '/poket/detail/[id]', query: { id: Number(id) + 1 }}} passHref>
        <a>
          <Image src="/image/right-red.png" alt="pokemon-logo" width={50} height={200} />
        </a>
      </Link>
        </div>
    </Layout>
  </div>
)
}