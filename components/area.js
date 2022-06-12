import Link from 'next/link'
export default function Area(props) {
  return (
    <>
      <Link href = {{pathname: '/poket/', query: {area_id: props.area_id, limit: props.limit, offset: props.offset}}} passHref>
        <a>
          <li>{props.title}</li>
        </a>
      </Link>
    </>
  )
}