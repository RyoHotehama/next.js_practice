import axios from "axios";
import {useState, useEffect} from "react"
import Link from 'next/link'

function AbilityConversion (props) {
  const [data, setData] = useState({names:[{name: ""}]})

  useEffect(() => {
    try {
      axios.get(
      props.url
      ).then(res => setData(res.data))
    } catch {
      console.log('miss')
    }
  },[props])

  
  return (
    <>
      <span>{data.names[0].name}</span>
    </>
  )
}

export default AbilityConversion