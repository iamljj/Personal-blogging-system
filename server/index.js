const express=require('express')
const app=express()
app.use(express.json())
app.use(require('cors')())
require('./router/web/model/index')(app)
require('./router/admin/model/index')(app)
require('./plugins/db')(app)
app.listen(3000,()=>{
    console.log('http://localhost:3000');
})