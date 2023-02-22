import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-udutyet-shard-00-00.rdswiid.mongodb.net:27017,ac-udutyet-shard-00-01.rdswiid.mongodb.net:27017,ac-udutyet-shard-00-02.rdswiid.mongodb.net:27017/?ssl=true&replicaSet=atlas-s33jva-shard-0&authSource=admin&retryWrites=true&w=majority`
 // const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-fsvjrf4-shard-00-00.rxodnlg.mongodb.net:27017,ac-fsvjrf4-shard-00-01.rxodnlg.mongodb.net:27017,ac-fsvjrf4-shard-00-02.rxodnlg.mongodb.net:27017/?ssl=true&replicaSet=atlas-wbwfh9-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });

    console.log("db connected successfully");
  } catch (err) {
    console.log("error while connecting", err.message);
  }
};

export default Connection;
