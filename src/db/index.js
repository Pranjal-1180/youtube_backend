<<<<<<< HEAD
import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'
=======
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
>>>>>>> 1b416f7d8ce5bac29ccab78eeed7d15354fbad6d

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDb connected DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection Error", error);
    process.exit(1);
  }
};

export default connectDB;
