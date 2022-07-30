 
 // import Mongoose 
 const mongoose = require("mongoose")
 // url Database
 const URlDB = 'mongodb://localhost:27017/Events'

 // connect in Database
 mongoose.connect(URlDB, (err) => {
     if(err) {
         console.log(err);
     }else{
         console.log("connect")
     }
 })

