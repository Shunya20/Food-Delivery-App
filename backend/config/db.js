import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://ludhianasuraj71:Suraj1234@cluster0.bkg7u.mongodb.net/food-del').then(()=>
        console.log("DB Connected")
)}