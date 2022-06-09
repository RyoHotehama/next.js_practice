import Link from 'next/link'
export default function Area(props) {
  return (
    <div>
      <Link href = {{pathname: '/poket/', query: {area_id: props.area_id, limit: props.limit, offset: props.offset}}}>
        <a>
          <div>{props.title}</div>
        </a>
      </Link>
    </div>
  )
}