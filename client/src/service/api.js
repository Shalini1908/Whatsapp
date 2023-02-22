import axios from "axios"

const url='http://localhost:3006';

export const addUser=async(data)=>{
    try {
        
     await  axios.post(`${url}/add`,data)

    } catch (err) {
        console.log("error while adding api",err.message)
    }
}


export const  getUsers=async()=>{
    try {
        
     let res=  await  axios.get(`${url}/users`)
     console.log(res)
     return res.data
   
       } catch (err) {
           console.log("error while calling getuser api",err.message)
       }
}


export const  setConversation=async(data)=>{
    try {
        await  axios.post(`${url}/conversation/add`,data)
    
   
       } catch (err) {
           console.log("error while calling setConversation api",err.message)
       }
}

export const  getConversation=async(data)=>{
    try {
      let res=await  axios.post(`${url}/conversation/get`,data)    
             return res.data
       } catch (err) {
           console.log("error while calling getConversation api",err.message)
       }
}

export const newMessage=async(data)=>{
    try {
       await axios.post(`${url}/message/add`,data) 
    } catch (err) {
        console.log("error while calling newMessage api",err.message)
    }
}

export const getMessages=async(id)=>{
    
    try {

       let res= await axios.get(`${url}/message/get/${id}`)
       
       return res.data;

    } catch (err) {
       
        console.log("error while calling getMessage api",err.message)
    
    }
}