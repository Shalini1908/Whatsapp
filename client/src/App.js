import Messenger from "./Components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

function App() {
const clientId = '959849663744-ec3rjlrsnm16qldjhq4j5rmm9laad67r.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
     <Messenger/>
     </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
