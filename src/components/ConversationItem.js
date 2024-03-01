import React from 'react'

function ConversationItem({ props }) {
  return (
    <div className='conversation-container'>
        <p className='con-icon'>{props.name[0]}</p>
        <p className='con-title'>{props.name}</p>
        <p className='con-lastMessage'>{props.lastMessage}</p>
        <p className='con-timestamp'>{props.timeStamp}</p>
    </div>
  );
}

export default ConversationItem;