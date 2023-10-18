const mongoose=require("mongoose");
const schema=mongoose.Schema;
const userSchema= schema({
    userName:{
      type:String,
      required:true,
      unique:true,
    },
    passWord:{
      type:String,
      required:true
    },
  })

  userSchema.virtual("nameAndPassWord").get(function(){
    return this.userName+" "+this.passWord;
  })
  userSchema.virtual("nameAndPassWord").set(function(nameAndPassWord){
    let str = nameAndPassWord.split(' ');
    this.userName=str[0];
    this.passWord=str[1];
  })   
  module.exports=mongoose.model("User",userSchema);


