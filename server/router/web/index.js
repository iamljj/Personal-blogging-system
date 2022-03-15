const { create } = require('../../modules/users')

module.exports=app=>{
    const express=require('express')
    const router =express.Router()
    const users=require('../../modules/users')
    router.post('/user',async(req,res)=>{
       const modul= await users.create(req.body) 
       const Res={
           code:200,
           msg:'创建成功',
           data:modul
       }
       res.send(Res)
    })
    app.use('/web/api',router)
}