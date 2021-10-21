const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors({
    origin:"*"
}))
//var stud=[]
const mongodb=require("mongodb")
const mongoclient=mongodb.MongoClient;
console.log(mongoclient);
const url="mongodb+srv://bhavy:bhavya2000@cluster0.0bfdg.mongodb.net/studdb?retryWrites=true&w=majority"
app.use(express.json())
<<<<<<< HEAD

app.get("/",function(req,res){
=======
app.get("/",function(req,res){
    res.json({
        msg:"success"
    })
})
app.post("/studadd",function(req,res)
{
    var a=new Object()
    a.id=stud.length+1;
    Object.keys(req.body).forEach((ele)=>{
        a[ele]=req.body[ele];
    })
    stud.push(a);
>>>>>>> 135518f7733b5e073a7d8b9cda2dae8f120f7db7
    res.json({
        msg:"success"
    })
})
app.post("/studadd",async function(req,res)
{ 
    try{
       
        let conn=await mongoclient.connect(url);
        const db=conn.db("studdb");
        await db.collection("stud").insertOne(req.body)
        console.log("***");
        await conn.close()
        res.json({
            msg:"success"
        })

    }
    catch(err)
    {
        res.status(500).json({
            msg:"error"
        })
    }
   
})
app.get("/studlist",async function(req,res){
    try{
        let conn=await mongoclient.connect(url);
        const db=conn.db("studdb");
        let s=await db.collection("stud").find().toArray()
        //console.log(s);
        await conn.close()
        res.json(s)

    }
    catch(err)
    {
        res.status(500).json({
            msg:"error"
        })
    }
})
app.get("/studlist/:id",async function(req,res){
    try{
        let conn=await mongoclient.connect(url);
        let db=conn.db("studdb");
        var id=mongodb.ObjectId(req.params.id)
        //console.log(id)
        let s=await db.collection("stud").findOne({"_id":id})
        //console.log(s)
        await conn.close()
        res.json(s)

    }
    catch(err)
    {
        res.status(500).json({
            msg:"error"
        })
    }
    
})
app.put("/studlist/:id",async function(req,res){
    //console.log("&&&&")
    try{
       
        console.log(req.body)
        let conn=await mongoclient.connect(url);
        let db=conn.db("studdb");
        var id=mongodb.ObjectId(req.params.id)
        //console.log(id,req.body);
         await db.collection("stud").updateOne({_id:id},{$set:req.body});
        await conn.close()
        res.json({
            msg:"success"
        })

    }
    catch(err)
    {
        res.status(500).json({
            msg:"error"
        })
    }
})
app.delete("/studlist/:id",async function(req,res){
    try{
        let conn=await mongoclient.connect(url);
        let db=conn.db("studdb");
        var id=mongodb.ObjectId(req.params.id)
        await db.collection("stud").deleteOne({_id:id})
        await conn.close()
        res.json({
            msg:"success"
        })

    }
    catch(err)
    {
        res.status(500).json({
            msg:"error"
        })
    }
})
const port=process.env.PORT||'3000'
app.listen(port,()=>{
   console.log(`server started at ${port}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 135518f7733b5e073a7d8b9cda2dae8f120f7db7
