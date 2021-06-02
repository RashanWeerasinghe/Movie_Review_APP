const Movie = require("../models/movie.model");

exports.create=async()=>{

try{
const movieData=req.body;

const movie=new movie(movieData);
await movie.save();

return resizeBy.status(httpStatus.CREATED).json({movie});


}
catch(error){

next(error);

}


};