module.exports=app=>{
    const mongoose =require ("mongoose")
    mongoose.connect('mongodb://127.0.0.1:21017/blogging',{
        useNewUrlParser: true,  useUnifiedTopology: true
    })
}