const express= require ("express");

const app=express();

exports.start=()=>{
    
    app.listen(4041,(err)=>{
                 
        if(err){
          console.error('Error: ${err}');
          process.exit(-1);

        }

        console.log("Movie Review APP API Started at 4041");


    });


};