
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [country, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))


  }, [])

  return (
    <>


    </>
  )
}

export default App
