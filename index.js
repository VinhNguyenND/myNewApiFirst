const express=require("express");
const app=express();
const userModel=require("./Model/user.model")
const dataBase=require("./dataBase")
const userRouter=require("./router/user");
const port=process.env.port||5000
app.use(express.json())//phai co neu khong se xuat hien loi can not read property undifined



app.route("/").get((req,res)=>res.json("my first app"));

app.route("/Myuser").get((req,res)=>res.json("my first app user"));

app.use("/user",userRouter)


app.listen(port,()=>console.log(`you first app is running ${port}`));

