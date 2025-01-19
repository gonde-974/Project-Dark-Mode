import { useState } from 'react'

import './App.css'
import ToggleModeComponent from './assets/components/ToggleModeComponent'

function App() {

  // smestuvanje na informacija dali e aktiven darkMode ili lightMode
  const[darkMode,setDarkMode] = useState(false)


  return (
    <>
     <div className={`${darkMode ? 'dark' : ''}`}>
      <ToggleModeComponent darkMode={darkMode} setDarkMode={setDarkMode}/>

      <div className='w-[1500px] h-[600px] bg-blue-500 dark:bg-black'></div>
     </div>      
    </>
  )
}

export default App
