const express=require("express")
const router=express.Router();

const hotels=require("../data/hotels")

router.route("/hotelCategory").get((req,res)=>{
    res.json(hotels.data)
})

module.exports=router;