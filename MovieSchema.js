const Schema = require('mongoose').Schema;
//const ObjectId = Schema.ObjectId;
const db1 = require('../DB/db')
const MovieSchema = new Schema({
    movie:{type: String, required: true,unique:true},
  releaseYear: {type: Date, default:Date.now, required: true},
  Director:{
    type: String,
    required: true
  },
  
Genre: String,
Rating:{
    type:Number,
    required:true
}
}); 

const MovieModel = db1.model('Movies',MovieSchema);
module.exports = MovieModel; 
