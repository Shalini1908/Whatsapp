import React from 'react'
import {Box , styled , Dialog} from "@mui/material";
import Menu from "./menu/Menu";
import Emptychat from './chat/Emptychat';
import ChatBox from './chat/ChatBox';

import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
const Component = styled(Box)`
color:black;
display:flex;

`

const LeftComponent = styled(Box)`
min-width:450px;
`

const RightComponent = styled(Box)`
width:73%;
min-width:300px;
height:100%;
border-left:1px solid rgb(0,0,0,0.14)
`


const dialogStyle ={
  height : "95%",
  width:"130%",
  margin:"20px",
  borderRadius:0,
  maxWidth:"100%",
  maxHeight:'100%',
  boxShadow:"none",
  overflow:"hidden"
  }
  

const ChatDialog = () => {

  const {person}=useContext(AccountContext)
  return (
    <Dialog open = {true}
    PaperProps={{sx: dialogStyle}}
    hideBackdrop={true}
    maxWidth={'md'}
    >
    <Component>
   <LeftComponent>
<Menu/>
   </LeftComponent>
   <RightComponent>

   {Object.keys(person).length?<ChatBox /> :<Emptychat />}
   </RightComponent>

    </Component>

    </Dialog>

  )
}

export default ChatDialog