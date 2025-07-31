import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
import userRoute from "./routes/user.route.js"
dotenv.config({})
const app = express();

//middleware
app.use(express.json());//to send the data in json form
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions))

//apis
app.use("/api/v1/user",userRoute);

// "http://localhost:8000/api/v1/register"
// "http://localhost:8000/api/v1/register"
// "http://localhost:8000/api/v1/register"

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running ar port ${PORT}`);
})