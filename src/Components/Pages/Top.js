import React , {useState, useEffect} from 'react'
import Units from '../Units/Units'
import axios from 'axios'



const Top = () => {
  let [result, setResult] = useState([]);
  useEffect(() => {
    axios.get('https://sharpeye-473e3.firebaseio.com/.json')
    .then(function (response) {
      console.log(response.data)

        setResult(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  
  }, []);

  return (
    <Units result={result}/>
  )


 

}

export default Top;