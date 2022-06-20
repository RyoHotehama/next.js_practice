import Link from 'next/link'
export default function Area(props) {
  return (
    <>
      <Link href = {{pathname: '/poket/type/', query: {type_id: props.type_id}}} passHref>
        <a>
          <li>{props.title}</li>
        </a>
      </Link>
    </>
  )
}