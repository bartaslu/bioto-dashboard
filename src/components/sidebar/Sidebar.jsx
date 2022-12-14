import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import InfoIcon from '@mui/icons-material/Info';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import {Link} from 'react-router-dom'
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
          <Link to="/home" className="link" style={{textDecoration:"none"}}>
            <div className="logo">LOGO</div>
          </Link>
        </div>
        <hr></hr>
        
        <div className="center">
            <ul className="list">
              <Link to="/home" style={{textDecoration:"none", color: "black"}}>
                <li>
                    <HomeIcon/>
                    <span>Home</span>
                </li>
              </Link>
              <Link to="/dashboards" style={{textDecoration:"none", color: "black"}}>
                <li>
                    <DashboardIcon/>
                    <span>Dashboards</span>
                </li>
              </Link>
              <Link to="/production" style={{textDecoration:"none", color: "black"}}>
                <li>
                    <MonetizationOnIcon/>
                    <span>Production</span>
                </li>
              </Link>
              <Link to="/charts" style={{textDecoration:"none", color: "black"}}>
                <li>
                  <QueryStatsIcon/>
                  <span>Charts</span>
                </li>
              </Link>
              <Link to='/status' style={{textDecoration:"none", color: "black"}}>
                <li>
                  <InfoIcon/>
                  <span>Plant Status</span>
                </li>
              </Link>
              <Link to="/cameras" style={{textDecoration:"none", color: "black"}}>
                <li>  
                  <PhotoCameraIcon/>
                  <span>Cameras</span>
                </li>
              </Link>
            </ul>
        </div>
    </div>
  );
};

export default Sidebar