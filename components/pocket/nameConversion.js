import axios from "axios";
import {useState, useEffect} from "react"

function NameConversion (props) {
  const [data, setData] = useState({names:[{name: ""}]})

  useEffect(() => {
    (async () => {
      await axios.get(
        props.url
      ).then(res => setData(res.data))
      console.log('nameConversionAPI接続完了')
    })();
  },[props])

  
  return (
    <>
      <h3>{props.title && props.title}{data.names[0].name}</h3>
    </>
  )
}

export default NameConversion