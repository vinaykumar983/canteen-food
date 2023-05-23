
const exp = require("express");
const expressAsyncHandler = require("express-async-handler");
const canteenApp=exp.Router();
require("dotenv").config()


canteenApp.use(exp.json());
canteenApp.use(exp.urlencoded())


canteenApp.post('/create-product',expressAsyncHandler(async(request,response)=>{
    let canteenCollectionObject=request.app.get("canteenCollectionObject");
    let newProduct=request.body;
    await canteenCollectionObject.insertOne(newProduct,()=>{
    response.send({message:"Item added successfully"});
    });
}))



canteenApp.post('/make-request',expressAsyncHandler(async(request,response)=>{
    let requestCollectionObject=request.app.get("requestCollectionObject");
    let req=request.body;
    await requestCollectionObject.insertOne(req,()=>{
    response.send({message:"Item added to cart"});
    });
}))

canteenApp.get('/get-request',expressAsyncHandler(async(request,response)=>{
    let requestCollectionObject=request.app.get("requestCollectionObject");
    let items=await requestCollectionObject.find().toArray();
    response.send({message:"All requests",payload:items});
}))

canteenApp.get('/getproducts',expressAsyncHandler(async(request,response)=>{
    let canteenCollectionObject=request.app.get("canteenCollectionObject");
    let items=await canteenCollectionObject.find().toArray();
    response.send({message:"All products",payload:items});
}))



module.exports=canteenApp