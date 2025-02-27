const express = require("express");
const CookieParser = require("cookie-parser")
const app = express();
require("dotenv").config()

app.use(express.json());
app.use(express.urlencoded({ extended:false}))
app.use(CookieParser());


app.use('/api/auth',require('./routes/auth.routes'))
app.use('/api',require("./routes/code.route"))


app.listen(8000,()=>{
    require("./config/connectDb").connectDb();
    console.log('server started at 8000')
})