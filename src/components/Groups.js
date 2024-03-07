import React from 'react'
import "./myStyles.css"
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../Images/live-chat.png'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from "framer-motion"

function Groups() {
  const lightTheme = useSelector((state)=>state.themeKey)
 
  return (
    <AnimatePresence>
      <motion.div 
      initial={{opacity:0, scale:0}}
      animate={{opacity:3, scale:3}}
      exit={{opacity:0, scale:0}} 
      transition={{
        ease:"anticipate",
        duration: 0.3,
      }}
      className='list-container'>
    <div className={ 'ug-header' + (lightTheme ? "" : ' dark')  }>
      <img src={logo} style={ {height:"2rem", width:"2rem", margin:"5px"}} alt="" />
      <p className={ 'ug-title' + (lightTheme ? "" : ' dark')  }>Available Groups</p>
    </div>
    <div className={ 'sb-search' + (lightTheme ? "" : ' dark')  }>
      <IconButton>
      <SearchIcon className={ 'icon ' + (lightTheme ? "" : ' dark')  } />
      </IconButton>
    <input type="text" placeholder="search" className={ 'search-box' + (lightTheme ? "" : ' dark')  }/>
    </div>
    <div className={ 'ug-list' + (lightTheme ? "" : ' dark')  }>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      <motion.div whileHover={{scale: 0.98}} whileTap={{scale: 0.2}} className='list-item'>
        <p className={ 'con-icon ' + (lightTheme ? "" : ' dark')  }>T</p>
        <p className='con-title'>Test Group</p>
      </motion.div>
      
      
    </div>
    </motion.div> 
    </AnimatePresence>
    
)
}

export default Groups