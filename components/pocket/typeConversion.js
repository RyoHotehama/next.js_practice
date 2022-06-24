import axios from "axios";
import {useState, useEffect} from "react"

function TypeConversion (props) {
  const [data, setData] = useState({names:[{name: ""}]})

  useEffect(() => {
    try {
      axios.get(
      props.url
      ).then(res => setData(res.data))
      console.log('typeConversionAPI接続完了')
    } catch {
      console.log('miss')
    }
  },[props])

  
  return (
    <>
      <span className={props.type_name}>{data.names[0].name}</span>
    </>
  )
}

export default TypeConversion