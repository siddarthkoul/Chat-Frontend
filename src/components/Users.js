import React from 'react'
import "./myStyles.css"
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../Images/live-chat.png'
import { useSelector } from 'react-redux' 

function Users() {
  const lightTheme = useSelector((state)=>state.themeKey)
  return (
    <div className='list-container'>
    <div className={ 'ug-header' + (lightTheme ? "" : ' dark')  }>
      <img src={logo} style={ {height:"2rem", width:"2rem", margin:"5px"}} alt="" />
      <p className={ 'ug-title' + (lightTheme ? "" : ' dark')  }>Online Users</p>
    </div>
    <div className={ 'sb-search' + (lightTheme ? "" : ' dark')  }>
      <IconButton>
      <SearchIcon  className={ 'icon ' + (lightTheme ? "" : ' dark')  }/>
      </IconButton>
    <input type="text" placeholder="search" className={ 'search-box' + (lightTheme ? "" : ' dark')  }/>
    </div>
    <div className={ 'ug-list' + (lightTheme ? "" : ' dark')  }>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
      
    </div>
    </div>
)
}

export default Users