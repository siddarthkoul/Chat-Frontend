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
import ChatArea from './ChatArea';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate =  useNavigate();
  const [lightTheme, setLightTheme] = useState(true);
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
    <div className={ 'sb-header' + (lightTheme ? "" : ' dark')  }>
      <div>
        <IconButton><AccountCircleIcon className={ 'icon ' + (lightTheme ? "" : ' dark')  }/></IconButton>
      </div>
      <div>
      <IconButton onClick={()=>{navigate('users')}}><PersonAddIcon  className={ 'icon ' + (lightTheme ? "" : ' dark')  }/></IconButton>
      <IconButton onClick={()=>{navigate('groups')}}><GroupAddIcon  className={ 'icon ' + (lightTheme ? "" : ' dark')  }/></IconButton>
      <IconButton onClick={()=>{navigate('create-groups')}}><AddCircleIcon  className={ 'icon ' + (lightTheme ? "" : ' dark')  }/></IconButton>
      <IconButton onClick={()=>{setLightTheme((prevValue)=>{
        return !prevValue; 
      })}}>
        { lightTheme && <NightlightIcon className={ 'icon ' + (lightTheme ? "" : ' dark')  }/>  }
        { !lightTheme && <LightModeIcon  className={ 'icon ' + (lightTheme ? "" : ' dark')  }  />  }
      </IconButton>
      </div>
      </div>
    <div className={ 'sb-search' + (lightTheme ? "" : ' dark')  }>
      <IconButton>
     <SearchIcon className={ 'icon ' + (lightTheme ? "" : ' dark')  }/>
     </IconButton>
     <input type="text" placeholder="search" className={ 'search-box' + (lightTheme ? "" : ' dark')  }/>
    </div>
    <div className={ 'sb-conversations' + (lightTheme ? "" : ' dark')  }>
      {conversations.map((conversation) => {
        return( 
        <ConversationItem props={conversation} key={conversation.name}/>
        );
      })}
     </div>
    </div>
  );
}

export default Sidebar; 