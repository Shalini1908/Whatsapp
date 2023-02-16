import { Box,styled,Divider } from '@mui/material';
import {useEffect,useState,useContext} from 'react'
import { getUsers } from '../../../service/api'
import Conversation from './conversation';
import { AccountContext } from '../../../context/AccountProvider';


const Component=styled(Box)`
height:81vh;
overflow:overlay;
`


const StyledDivider=styled(Divider)`
margin:0 0 0 75px;
background-color:#e9edef;
opacity:0.6
`

const Conversations = () => {

const [users,setUsers]=useState([]);
const {account} =useContext(AccountContext)


    useEffect(()=>{
        
        const fetchData=async()=>{
          let res=   await getUsers()
          setUsers(res)
        }
        fetchData()
    },[])
  return (
    <Component>
        {
            users.map(user=>(
            
              // console.log(users)

                 user.sub !==account.sub &&
                 <>
                <Conversation  user={user}/>
                <StyledDivider />
                </>
            ))
        }
    </Component>
  )
}

export default Conversations