import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

export default function App() {
  const [count, setCount] = useState(0)

  return(
    <>
      <MyComponent name="Imane" age={25} />
    </>
  )
}
