const mongoose =require ('mongoose')
const scheam=new mongoose.Schema({
    name:{type:String},
    password:{type:String}
})
module.exports=mongoose.model('user',scheam)