import { Box } from '@mui/material'
import React from 'react'
import Header from './Header';
import Search from './Search';
import Conversations from './conversations';

const Menu = () => {
  return (
    <Box>
     <Header/>
    <Search/>
    <Conversations />
    </Box>
  )
}

export default Menu