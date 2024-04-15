const express= require("express");
const cors= require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { menuRouter } = require("./routes/menu.route");
require("dotenv").config();
const app= express();
app.use(express.json());

app.use(cors())
app.use("/user",userRouter)
app.use("/menu", menuRouter)
app.get("/",(req,res)=>{
    res.send("Welcome to The Street Bites Server")
})

app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("Connected to DB");
        console.log(`Server is Running on PORT ${process.env.PORT}`)
    } catch (error) {
        console.log("Server", error.message)
    }
})

