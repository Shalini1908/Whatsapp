
import Conversation from "../model/Conversation.js"

 export const newConversation=async(req,res)=>{
    try {
        
      const senderId=req.body.senderId
      const recieverId=req.body.recieverId

      const exist =await Conversation.findOne({members:{$all:[recieverId,senderId]}})
      
      if(exist){
         return  res.status(200).json({msg:"conversation exists"})
      
        }
  
        const newConversation =  new Conversation({
            members:[senderId,recieverId]
        })
        await  newConversation.save()
         return  res.status(200).json('newConversation saved' );
   
   } catch (err) {
      return res.status(500).json(err.message)
    
    }
 }

   export const getConversation=async(req,res)=>{
         try{
            const senderId=req.body.senderId
            const recieverId=req.body.recieverId
     let conversation=await Conversation.findOne({members:{$all:[recieverId,senderId]}})
       return res.status(200).json(conversation)
   }catch(err){
      return res.status(500).json(err.message)      

         }
        }

