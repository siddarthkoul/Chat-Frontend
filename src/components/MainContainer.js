import React, { useState } from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar'
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_groups from './Users_groups';
import { Outlet } from 'react-router-dom';

function MainContainer() {
  
  return (
    <div className='main-container'>
      <Sidebar />
      <Outlet />
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Users_groups /> */}
    </div>
  );
}

export default MainContainer;