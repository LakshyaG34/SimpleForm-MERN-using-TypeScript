import express from "express"
import userRoute from "./routes/user.route";
import connectDB from "./db/connectDB";
import cookieParser from "cookie-parser"

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cookieParser())
app.use("/api", userRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log("Server is running successfully")
})