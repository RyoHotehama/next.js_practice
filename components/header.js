import {useState} from "react"
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [name, setName] = useState(0)
  const handleChange = (event) => {
    setName(event.target.value)
}
  return (
    <div className="sticky-top text-center bg-danger">
      <div className="image-wrap">
        <Link href = {{ pathname: '/poket'}} passHref>
          <a>
          <Image src="/image/pokemon_logo.png" alt="pokemon-logo" width={250} height={80} />
          </a>
        </Link>
      </div>
      <div>
      <input id="id" onChange = {handleChange}/>
        <Link href = {{pathname: '/poket/detail/[id]', query: { id: name}}}>検索</Link>
      </div>
    </div>
  )
}