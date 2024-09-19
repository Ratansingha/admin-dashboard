/* eslint-disable no-unused-vars */
import React from 'react'
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import "./topBar.css";


const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">

        <div className="topLeft">
          <span className="logo">RatanAdmin</span>
        </div>

        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topBarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="topAvatar"
          />
        </div>
         
      </div>
    </div>
  );
}

export default TopBar
