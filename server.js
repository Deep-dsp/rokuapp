const express = require('express');
//express router handles incoming requests and directs them 
const app = express();

const port = process.env.PORT || 5050;

//this catches every route request -> everytime you change your location bar, this function reacts
//and intercepts the route request
app.use((req, res, next)=>{
    console.log('incoming request');

    //this the origin route requests ie. /api/users/
    next(); //send the user to the route they requested
})

// use the API route file to handle API route (../api/users, /api/user/id etc)
app.use("/api", require("./routes/api"));

//run the app at the PORT
app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});