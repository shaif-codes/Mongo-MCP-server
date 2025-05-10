import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const mongo_uri = process.env.MONGO_URI;

const connect =  async () => {
  return mongoose
    .connect(mongo_uri)
    // .then(() => console.log("database connected succuessfully"))
    // .catch((err) => console.log("[ERORR] unable to connect to mongoDB: ", err));
};

export default connect;
