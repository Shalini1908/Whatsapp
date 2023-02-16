import { Box ,Typography,styled} from "@mui/material"
import {Search,MoreVert} from '@mui/icons-material'
import { defaultProfilePicture } from "../../constants/data"


const Header =styled(Box)`
height:44px;
background-color:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`

const Image=styled('img')({
  height:"40px",
  width:"40px",
  objectFit:'cover',
  borderRadius:'50%'
})

const Name=styled(Typography)`
margin-left:12px !important
`
const Status=styled(Typography)`
font-size:12px ;
margin-left:12px !important;
color:rgb(0 ,0, 0 ,0.6)
`

const RightContainer=styled(Box)`
margin-left:auto;
&>svg{
  padding: 8px;
  font-size:24px;
  color:#000
}
`

const ChatHeader = ({person}) => {
  return (
 <Header>
  <Image src={person.picture} alt="dp" />
  <Box>
    <Name>{person.name}</Name>
    <Status>offline</Status>
  </Box>
  <RightContainer>
  <Search />
  <MoreVert />
  </RightContainer>
 </Header>
  )
}

export default ChatHeader