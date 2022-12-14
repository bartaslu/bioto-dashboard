import React from "react";
import "./navbar.scss";

import { DarkModeOutlined } from "@mui/icons-material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon"/>
        </div>
        <div className="items">
        <div className="item">
            <DarkModeOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <PersonOutlineOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img src={require('../../props/user.png')} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar