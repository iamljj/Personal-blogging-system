const { create } = require('../../../modules/users')

module.exports=app=>{
    const express=require('express')
    const router =express.Router({
        mergeParams:true
    })
    router.post('',async(req,res)=>{
       const modul= await req.Model.create(req.body) 
       const Res={
           code:200,
           msg:'创建成功',
           data:modul
       }
       res.send(Res)
    })
    router.get('/:page/:size',async(req,res)=>{
        const model=await req.Model.find().limit(page-1*size,page,size)
    })
    app.use('/web/api/rest/:resource',async(req,res,next)=>{
        const moudleName=req.params.resource
        req.Model=require(`../../../modules/${moudleName}`)
        next()
    },router)
}