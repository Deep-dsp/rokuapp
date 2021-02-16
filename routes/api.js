const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    //res.json = echo json_encode in PHP
    res.json({message: "you hit the API file"});
});

router.get("/users", (req, res)=>{
    // run sql query here
    //res.json( query result here )
    res.json({message: "all users route"});
});

//Dyncamic route handler that can accept a parameter
//this equal to $_GET["id"] (req.params.id)
//we are passing the id via route : /api/movies/20 etc
router.get("/movies/:id", (req, res)=>{
    // run sql query here
    //res.json( query result here )
    res.json({message: "all movies route", movie:req.params.id});
});


module.exports = router;