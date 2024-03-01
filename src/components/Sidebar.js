import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import "./myStyles.css"
import { IconButton } from '@mui/material';
import ConversationItem from './ConversationItem';
function Sidebar() {
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
    }
  ]);
  return (
    <div className='Sidebar-container'>
    <div className='sb-header'>
      <div>
        <IconButton><AccountCircleIcon /></IconButton>
      </div>
      <div>
      <IconButton><PersonAddIcon /></IconButton>
      <IconButton><GroupAddIcon /></IconButton>
      <IconButton><AddCircleIcon /></IconButton>
      <IconButton><NightlightIcon /></IconButton>
      </div>
      </div>
    <div className='sb-search'>
      <IconButton>
     <SearchIcon />
     </IconButton>
     <input type="text" placeholder="Search" className='search-box'/>
    </div>
    <div className='sb-conversations'>
      {conversations.map((conversation) => {
        return <ConversationItem props={conversation} />
      })}
     </div>
    </div>
  );
}

export default Sidebar;