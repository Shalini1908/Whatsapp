import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


const USERNAME=process.env.DB_USERNAME
const PASSWORD =process.env.DB_PASSWORD

  const Connection =async()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-9yonztl-shard-00-00.s2waugv.mongodb.net:27017,ac-9yonztl-shard-00-01.s2waugv.mongodb.net:27017,ac-9yonztl-shard-00-02.s2waugv.mongodb.net:27017/?ssl=true&replicaSet=atlas-35ea5s-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
     await   mongoose.connect(URL,{useUnifiedTopology:true})
     
    console.log("db connected successfully") 
    } catch (err) {
        console.log("error while connecting",err.message)
    }
}

export default Connection