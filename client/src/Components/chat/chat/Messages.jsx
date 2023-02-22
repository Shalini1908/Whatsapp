import { useContext, useState,useEffect} from 'react'
import { Box, styled } from '@mui/material'
import Footer from './Footer';
import { getMessages, newMessage } from '../../../service/api';
import {AccountContext} from "../../../context/AccountProvider"

const Wrapper =styled(Box)`
background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size:50%
`
const Component=styled(Box)`
height:80vh;
overflow-y:scroll;
`

const Messages = ({person,conversation}) => {
  const [value,setValue]=useState("")
  const {account}=useContext(AccountContext);

  useEffect(()=>{
    const getMessageDetails=async()=>{
  let data=await getMessages(conversation._id);
   console.log(data);
    }
    conversation._id && getMessageDetails()
  },[person._id,conversation._id])

  const sendText=async(e)=>{
      //  console.log(e)
        const code=e.keyCode || e.which;
         if(code===13){
          let message={
            senderId:account.sub,
            receiverId:person.sub,
            conversationId:conversation._id,
           type:'text',
           text:value
          }
          // console.log(message);
          await newMessage(message);
          setValue("")
         }
      }
  return (
<Wrapper>
<Component>

</Component>
<Footer sendText={sendText}
 setValue={setValue}
 value={value}
 />
</Wrapper>
  )
}

export default Messages