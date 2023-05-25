const express = require("express")
const app = express();

const ConnectDB = require("./config/DB");

//Port 
const PORT = process.env.PORT || 5000;


//Middleware for form data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("Server is running..........");
})


app.use("/api",require("./routes/user"))


//Connecting Database
ConnectDB();


// Server is listening 
app.listen(PORT,()=>{

    console.log("Server is running at port ", PORT);
})