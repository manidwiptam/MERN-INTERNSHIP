const express = require("express");

const app = express();
const port = 3000;

// const myUrl = new URL('https://youtube.com')


app.get("/",(req, res) => {
    res.send ("Welcome to the server MF's");
});

app.get("/home",(req, res) => {
    res.send ("Home Page")
});

app.get("/log",(req, res) => {
    res.send ("Log In")
});

// app.get("/", (req, res) => {
//     res.send (myUrl)
// })


app.listen(port, () => {
    console.log(`Example app listning on port ${port}`);
});