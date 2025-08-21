import express from "express"
import userRoute from "./routes/user.route";
import connectDB from "./db/connectDB";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/api", userRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log("Server is running successfully")
})