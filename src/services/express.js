const express= require ("express");
const morgan=require('morgan');

const config=require('../config');

const app=express();



app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res) =>{ 

      return res.json({message:"Hello every one!!!"});
  }


);

exports.start=()=>{
    
    app.listen(config.port,(err)=>{
                 
        if(err){
          console.error('Error: ${err}');
          process.exit(-1);

        }

        console.log("Movie Review APP API Started at 4041");


    });


};