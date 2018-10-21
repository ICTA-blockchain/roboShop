const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/robotDatabase');
const Schema = mongoose.Schema;
let RoboSchema = new Schema({
    Name:String,
    Energy:Number,
    Power:Number,
    Price:Number,
});
let RoboData = mongoose.model('Robodata',RoboSchema);
module.exports= RoboData;