import React from 'react'

import { MdDarkMode } from "react-icons/md";
import { LuSun } from "react-icons/lu";


function ToggleModeComponent({darkMode,setDarkMode}) {

    function handleMode(){
        setDarkMode(!darkMode)
    }
  return (
    <div className='flex items-center justify-center my-[25px]'
         onClick={handleMode}      
    >
        {darkMode ? <MdDarkMode size={42}/> : <LuSun size={42}/>}
    </div>
  )
}

export default ToggleModeComponent