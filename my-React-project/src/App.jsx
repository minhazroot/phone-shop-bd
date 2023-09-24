import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Person from './Person'

function App() {
  const [count, setCount] = useState(0)
  const actor = ['Korim', 'rohim', 'jober', 'khalad']

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Person name="Minhaz Uddin"></Person>
      {
        actor.map(name => <Person name={name}></Person>)
      }

{/* 
      {/* <Todo name="Minhaz Uddin" age={23}></Todo>
      <Todo name="Korim Uddin" age={50}></Todo> */} */}


    </>
  )
}

export default App
