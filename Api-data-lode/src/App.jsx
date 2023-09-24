

import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [Country, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountry(data))


  }, [])

  return (
    <>
      <h1>Country:{Country.length}</h1>



    </>
  )
}

export default App
