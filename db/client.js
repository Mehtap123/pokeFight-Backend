import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

try {
  await mongoose.connect(uri);
  console.log("Connected (mit try catch)");
} catch (error) {
  console.log(error);
}
