const express = require('express');
var router= express.Router();



router.get('/list',(req,res)=>{
    movieList().then(()=>{
    res.render("meallist", {
        meals: arr[0],
        calorielimit : arr[1]
    })


}).catch(err=>{
     res.send("error occured")
})
