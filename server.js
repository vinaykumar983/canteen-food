const exp=require("express");

let app=exp();

app.use(exp.json())

const mclient=require("mongodb").MongoClient;

const path=require("path");

app.use(exp.static(path.join(__dirname,'./build')))

require("dotenv").config()

let DBurl=process.env.DBURL
// let DBurl="mongodb+srv://vinaykumar20:vinaykumar20@mycluster.hgq5f.mongodb.net/?retryWrites=true&w=majority"
mclient.connect(DBurl)
.then((client)=>{
    let dbObj=client.db("canteen");
    let userCollectionObject=dbObj.collection("userCollection");
    let canteenCollectionObject=dbObj.collection("canteenFood");
    let requestCollectionObject=dbObj.collection("requestCollection");
    app.set("userCollectionObject",userCollectionObject);
    app.set("canteenCollectionObject",canteenCollectionObject);
    app.set("requestCollectionObject",requestCollectionObject);
    console.log("DB connection successful");
})
.catch((error)=>{
    console.log("Error in db connection",error);
})

let userApp=require('./API/userApp');
let canteenApp=require('./API/canteenApp');

app.use('/user-api',userApp);
app.use('/canteen-api',canteenApp);

app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})


app.use((request,response,next)=>{
    response.send({message:`path ${requsest.url} is invalid`})
})
app.use((error,request,response,next)=>{
    response.send({message:error.message})
})


app.listen(4000,()=>{
    console.log("server listening on port number 4000")
})