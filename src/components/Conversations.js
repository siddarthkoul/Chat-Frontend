import React, { useState } from 'react'
import ConversationItem from './ConversationItem';
import { useDispatch, useSelector } from 'react-redux'; 


function Conversations() {
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
        }
      ]); 
  return (
    <div className={ 'sb-conversations' + (lightTheme ? "" : ' dark')  }>
      {conversations.map((conversation) => {
        return( 
        <ConversationItem props={conversation} key={conversation.name}/>
        );
      })}
     </div>
  );
}

export default Conversations;