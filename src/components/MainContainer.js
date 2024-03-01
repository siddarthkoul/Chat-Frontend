import React, { useState } from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar'
import ChatArea from './ChatArea';

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
      <ChatArea props={conversations[0]} />
    </div>
  );
}

export default MainContainer;