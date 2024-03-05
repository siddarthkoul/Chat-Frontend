import React from 'react'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';


function CreateGroups() {
  const lightTheme = useSelector((state)=>state.themeKey)

  return (
    <div className={ 'createGroups-container' + (lightTheme ? "" : ' dark')  }>
        <input placeholder='Enter Group Name' className={ 'search-box' + (lightTheme ? "" : ' dark')  } />
        <IconButton>
          <DoneOutlineRoundedIcon className={ 'icon ' + (lightTheme ? "" : ' dark')  }/>
        </IconButton>
    </div>
  );
}

export default CreateGroups