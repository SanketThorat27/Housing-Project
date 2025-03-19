import mongoose from "mongoose";

 const ConnectDB=async()=>{
    try{
  await mongoose.connect("mongodb://127.0.0.1:27017/Housing-Authentication")
  console.log("MONGODB Connected Successfully")

    } catch(error){
        console.log("ERROR",error)
    }
}
export default ConnectDB