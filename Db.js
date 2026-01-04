import mongoose from "mongoose";
const mongo_URL="mongodb+srv://karthikhs6387_db_user:12345@cluster0.yfz8jmp.mongodb.net/"

const mongoConnection =()=>{
    try {
       const connection = mongoose.connect(mongo_URL);
       console.log("Database Connected")
    } catch (error) {
        // console.log("error in db")
        console.log(error)
    }
}

export default mongoConnection;