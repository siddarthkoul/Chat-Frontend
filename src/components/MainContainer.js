import React, { useState } from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar'
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_groups from './Users_groups';

function MainContainer() {
  const [conversations, setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timestamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timestamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timestamp: "today",
    },
  ]);
  return (
    <div className='main-container'>
      <Sidebar />
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]} /> */}
      <Users_groups />
    </div>
  );
}

export default MainContainer;