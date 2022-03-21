import React from 'react'
// Components
import SideBar from "./SideBar"
import MainWindow from "./MainWindow"

const MainView = () => {
  return (
    <div className='mainView w-100 d-flex'>
        <SideBar />
        <MainWindow />
    </div>
  )
}

export default MainView