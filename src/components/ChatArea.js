import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';

function ChatArea() {
  const lightTheme = useSelector((state)=>state.themeKey)

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
  var props = conversations[0];
  return (
    <div className='chatArea-container'>
        <div className={ 'chatArea-header' + (lightTheme ? "" : ' dark')  }>
        <p className='con-icon'>{props.name[0]}</p>
        <div className={ 'header-text' + (lightTheme ? "" : ' dark')  }>
            <p className='con-title'>{props.name}</p>
            <p className='con-timeStamp'>{props.timestamp}</p>
        </div>
        <IconButton>
            <DeleteIcon className={ 'icon ' + (lightTheme ? "" : ' dark')  }/>
        </IconButton>
        </div>
        <div className={ 'messages-container' + (lightTheme ? "" : ' dark')  }>
            <MessageOthers/>
            <MessageSelf />
            <MessageOthers/>
            <MessageSelf />
            <MessageOthers/>
            <MessageSelf />
            <MessageOthers/>
            <MessageSelf /><MessageOthers/>
            <MessageSelf />
        </div>
        <div className={ 'text-input-area' + (lightTheme ? "" : ' dark')  }>
            <input placeholder='Type a Message' className={ 'search-box' + (lightTheme ? "" : ' dark')  } />
            <IconButton>
                <SendIcon className={ 'icon' + (lightTheme ? "" : ' dark')  }/>
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea