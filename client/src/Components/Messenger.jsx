import {AppBar , Toolbar , styled , Box} from "@mui/material"
import LoginDialogue from "./account/LoginDialogue";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";
import { useContext } from "react";

const Component = styled(Box)`
height : 100vh;
background-color:#111b21;
box-shadow:"none";
`

const Header = styled(AppBar)`
background-color:#00A884 ;
height : 125px;
box-shadow:none;



`

const LoginHeader = styled(AppBar)`
background-color:#00bfa5 ;
height : 222px;
box-shadow:none;



`

const Messenger = () =>{

const {account} = useContext(AccountContext)    
    return (
        <Component>
            {
                account? 
                <>
        <Header>
         <Toolbar>
         </Toolbar>

        </Header>
        <ChatDialog/>
                
        </>
        :
        <>
        <LoginHeader>
         <Toolbar>
        </Toolbar>

        </LoginHeader>
    <LoginDialogue/>
    </>
}
    </Component>
    )
}

export default Messenger