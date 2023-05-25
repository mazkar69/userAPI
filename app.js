const express = require("express")
const app = express();
const path = require("path");
const ConnectDB = require("./config/DB");
const { fileURLToPath } = require("url");

//Port 
const PORT = process.env.PORT || 5000;


//Middleware for form data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    // res.send("Server is running..........");
    const filePath = path.join(__dirname, "./usage.html")
    res.sendFile(filePath);
})


app.use("/api",require("./routes/user"))


//Connecting Database
ConnectDB();


// Server is listening 
app.listen(PORT,()=>{

    console.log("Server is running at port ", PORT);
})