import React from 'react'
import "./cameras.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Map from '../../components/map/Map'
import Chart from '../../components/chartDisplays/Chart'




const Cameras = () => {
  return (
    <div className="cameras">
        <Sidebar/>
        <div className="cameras__container">
            <Navbar/>
            <div className="main__container"></div>
            <Map/>
        </div>
    </div>
    
    
    
  )
}

export default Cameras