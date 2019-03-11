const express = require("express");
var ex = express();
const Form1= require("../schema/Form");
const bodyparser = require("body-Parser");

var router = express.Router();
router.use(bodyparser.json())
router.route("/")
.get(async (req,res,next)=>
{
    console.log("wellcome");
  
})
.post(async (req,res,next)=>
{  id=req.body.value;
  pagenumber=req.body.pagenumber;
  size=req.body.size;
  console.log("sxnbshbxbxjhsbxjhsbxjhsbxjsbjsbxjsbxjhsbxsjbxsjxbjxb"+size)
 await Form1.customer1.find({agent_id:id}).skip(1 * (pagenumber -1)).limit(size)
  
    
    .then((data)=>
    {
console.log(data)
res.status(200).json(data);

  })

})
module.exports=router;