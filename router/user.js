const express=require("express");
const userModel=require("../Model/user.model")
const dataBase=require("../dataBase");
const e = require("express");
const router=express.Router()
//luu y giua body va params
//create
router.route("/resigter").post(async(req,res)=>{
    const user1=new userModel({
        userName:req.body.userName,
        passWord:req.body.passWord,
      })
 const val= await user1.save()
    .then(()=>{
        console.log("you post succes")
       res.status(200).json("ok")
    })
    .catch((error)=>{
        console.log(error)
        console.log("you post error")
        res.status(200).json("no ok")
    })
    res.json=val
})
//get
router.route("/getUserByName").get(async (req, res) => {
  const userName = req.query.userName; // Lấy giá trị từ truy vấn

  if (!userName) {
    return res.status(400).json({ message: 'Thiếu tham số userName trong yêu cầu.' });
  }

  userModel.findOne({ userName })
    .then(function (foundItem) {
      console.log(foundItem);
      if (foundItem) {
        res.json(foundItem);
      } else {
        res.json({ message: 'Không tìm thấy mục phù hợp.' });
      }
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json({ message: 'Lỗi server.' });
    });
});
//update
router.route("/updateUserByName").put( async (req,res)=>{
  const userName = req.query.userName
  const passWord=req.query.passWord
  userModel.findOneAndUpdate({userName},{passWord},{new:true,runValidators:true})
  .then(function(result){
    res.send(result)
  })
  .catch(function(error){
   res.send(error)
  })
})
//delete
router.route("/deleteByName").delete(async(req,res)=>{
  const userName = req.query.userName
  userModel.findOneAndRemove({userName})
  .then(function(result){
    res.send("delete succes: "+result)
  })
  .catch(function(error){
    res.send(error)
  })
})

module.exports=router