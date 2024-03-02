import React from 'react'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { IconButton } from '@mui/material';


function CreateGroups() {
  return (
    <div className='createGroups-container'>
        <input placeholder='Enter Group Name' className='search-box' />
        <IconButton>
          <DoneOutlineRoundedIcon />
        </IconButton>
    </div>
  );
}

export default CreateGroups