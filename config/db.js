 const mongoose = require("mongoose")
 const uri = "mongodb+srv://ahmedfareeq:07715503646ice2002@cluster0.zxql8.mongodb.net/?retryWrites=true&w=majority";
 mongoose.connect(uri, (err) => {
     if(err) {
         console.log(err);
     }else{
         console.log("connect")
     }
 })

