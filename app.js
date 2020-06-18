const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
const cookieParser =require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

import {userRouter} from "./router"

const handleHome= (req, res)=>{res.send("hi kwon you are genius")}
const handleProfile = (req, res)=>{res.send("you are on my profile")};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet()); 
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.use("/user", userRouter);
export default app;