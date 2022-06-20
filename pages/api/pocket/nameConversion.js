import axios from "axios";
import {useState, useEffect} from "react"

function NameConversion (props) {
  const url = "https://pokeapi.co/api/v2/pokemon-species/" + props.id
  const [data, setData] = useState({names:[{name: ""}]})

  useEffect(() => {
    try {
      axios.get(
      url
      ).then(res => setData(res.data))
    } catch {
      console.log('miss')
    }
  },[props])

  
  return (
    <>
      <h3 key={props.key}>{props.title && props.title}{data.names[0].name}</h3>
    </>
  )
}

export default NameConversion