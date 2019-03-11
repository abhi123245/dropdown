const express = require("express");
var ex = express();
const Form1= require("../schema/Form");
const bodyparser = require("body-Parser");
var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.post(async (req,res)=>
{     
 var id=req.body.id;
    if(true){
   await Form1.user1.find({lead_id:id},function(err,docs){

    })
    .then((data)=>
    {
console.log(data);
res.render("main",{data:data});
    })
    }
    else{
        res.send("you are not login plzz login first")
    }
})
.post(async (req,res)=>
{

})
module.exports=router;