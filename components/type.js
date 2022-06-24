import Link from 'next/link'
export default function Area(props) {
  return (
    <>
      <Link href = {{pathname: '/poket/type/[type_id]', query: {type_id: props.type_id}}} passHref>
        <a>
          <li>{props.title}</li>
        </a>
      </Link>
    </>
  )
}