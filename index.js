const express = require('express');
const app = express();

const PORT=4000;
function handleListening(){
    console.log(`listening on : http://localhost:${PORT}`)
}

function handleHome(req, res){
    console.log("Hi from Home")
    res.send("hi kwon")
}
app.get("/", handleHome)
app.listen(PORT, handleListening);