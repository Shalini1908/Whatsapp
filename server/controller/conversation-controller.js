
import Conversation from "../model/Conversation.js"

 export const newConversation=async(req,res)=>{
    try {
        
      const senderID=req.body.senderID
      const recieverId=req.body.recieverId

      const exist =await Conversation.findOne({members:{$all:[recieverId,senderID]}})
      
      if(exist){
         return  res.status(200).json({msg:"conversation exists"})
      
        }
  
        const newConversation =  new Conversation({
            members:[senderID,recieverId]
        })
        await  newConversation.save()
         return  res.status(200).json('newConversation saved' );
   
   } catch (err) {
      return res.status(500).json(err.message)
    
    }
 }