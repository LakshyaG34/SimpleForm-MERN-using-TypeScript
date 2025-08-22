import express,{Request, Response} from "express"
import userRoute from "./routes/user.route";
import connectDB from "./db/connectDB";
import cookieParser from "cookie-parser"
import path from "path"
import dotenv from "dotenv"

dotenv.config();

// import cors from "cors"

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cookieParser())

// app.use(cors({
//     origin: "http://localhost:5173", // your frontend URL
//   credentials: true
// }));

app.use(express.static(path.join(__dirname, "../../frontend/dist")));


app.use("/api", userRoute);

app.get("*", (req: Request, res: Response) =>{
  res.sendFile(path.join(__dirname, "../../frontend/dist", "index.html"));
});



const startServer = async()=>{
  try{
    await connectDB();
    app.listen(PORT, ()=>{
      console.log(`Server is running on ${PORT}`);
    });
  }catch(err)
  {
    console.log("DB connection failed:", err);
  }
}

startServer();

// app.listen(PORT,()=>{
//     connectDB();
//     console.log("Server is running successfully")
// })