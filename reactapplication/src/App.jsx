import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<link rel="stylesheet" href="styles.css"></link>
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Details</h1>
      <div class="my-box"/>
      <input type='text' placeholder='Enter First Name'/><br></br>
      <input type='text' placeholder='Enter Last Name'/><br></br>
      <input type='number' placeholder='Enter PhoneNumber'/><br></br>
    </>
  )
}

export default App
