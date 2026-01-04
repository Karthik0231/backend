import mongoose from "mongoose";
const { Schema} =mongoose;

const userSchema = new Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
        phone:{
            type:Number
        }
    },
   {
    timestamps:true
   } 
)

export default mongoose.model("User", userSchema);