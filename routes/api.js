const express = require('express');
const router = express.Router();
//import sql conncetion
const connect = require("../config/sqlConfig");

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
router.get("/movies", (req, res)=>{
    // run sql query here

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        
        // Use the connection
        connection.query('SELECT * FROM tbl_movies', function (error, results) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) throw error;

            res.json(results);
        });
    });
    //res.json( query result here )
});


router.get("/movies/:id", (req, res)=>{
    // run sql query here
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        
        // Use the connection
        connection.query(`SELECT * FROM tbl_movies WHERE movies_id=${req.params.id}`, function (error, results) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) throw error;
    
            res.json(results);
        });
        });
});


module.exports = router;