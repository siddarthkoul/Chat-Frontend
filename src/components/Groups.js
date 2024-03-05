import React from 'react'
import "./myStyles.css"
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../Images/live-chat.png'

function Groups() {
  return (
    <div className='list-container'>
    <div className='ug-header'>
      <img src={logo} style={ {height:"2rem", width:"2rem", margin:"5px"}} alt="" />
      <p className='ug-title'>Available Groups</p>
    </div>
    <div className='sb-search'>
      <IconButton>
      <SearchIcon />
      </IconButton>
    <input type="text" placeholder="search" className='search-box'/>
    </div>
    <div className='ug-list'>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test Group</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test Group</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test Group</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test Group</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test Group</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test Group</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test Group</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test Group</p>
      </div>
      <div className='list-item'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test Group</p>
      </div>
      
    </div>
    </div>
)
}

export default Groups