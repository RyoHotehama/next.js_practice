import axios from "axios";
import {useState, useEffect} from "react"

function AbilityConversion (props) {
  const [data, setData] = useState({names:[{name: ""}]})

  useEffect(() => {
    try {
      axios.get(
      props.url
      ).then(res => setData(res.data))
      console.log('abilityConversionAPI接続完了')
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