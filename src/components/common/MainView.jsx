import React, { useState } from 'react'
// Components
import SideBar from "./SideBar"
import MainWindow from "./MainWindow"

const MainView = () => {
const [navStatus, setNavStatus] =useState(false)

  function buttonCollapse(){
    setNavStatus(!navStatus)
  }
  return (
    <div className='mainView w-100 d-flex'>
      {navStatus?(<SideBar buttonCollapse={buttonCollapse} />):(<SideBar buttonCollapse={buttonCollapse} />)}
        
        <MainWindow />
        
    </div>
  )
}

export default MainView