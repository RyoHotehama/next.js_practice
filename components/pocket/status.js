import axios from "axios";
import {useState, useEffect} from "react"

function Status (props) {
  const [data, setData] = useState({names:[{name: ""}]})

  useEffect(() => {
    try {
      axios.get(
      props.url
      ).then(res => setData(res.data))
      console.log('statusAPI接続完了')
    } catch {
      console.log('miss')
    }
  },[props])

  return (
    <>
      <th className='p-2 status'>{data.names[0].name}</th>
      <th className='p-2'>{props.base_stat}</th>
    </>
  )
}
export default Status