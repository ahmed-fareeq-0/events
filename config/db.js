 
 // import Mongoose 
 const mongoose = require("mongoose")
 // url Database
 const URlDB = "mongodb+srv://ahmedfareeq:07715503646ice2002@cluster0.zxql8.mongodb.net/?retryWrites=true&w=majority";

 // connect in Database
 mongoose.connect(URlDB, (err) => {
     if(err) {
         console.log(err);
     }else{
         console.log("connect")
     }
 })

