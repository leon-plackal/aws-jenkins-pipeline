import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlertComponent from './components/alert'
import CheckboxMultiple from './components/checkbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
      <AlertComponent title="FUck youuuuuu" message="This is an alert message" />
      <CheckboxMultiple/>
      </div>
      
    </>
  )
}

export default App
