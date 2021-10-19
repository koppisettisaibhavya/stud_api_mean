const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors({
    origin:"*"
}))
var stud=[]
app.use(express.json())
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
    res.json({
        msg:"success"
    })
})
app.get("/studlist",function(req,res){
    res.json(stud);
})
app.get("/studlist/:id",function(req,res){
    stud.forEach((ele)=>{
            if(ele.id==req.params.id)
            {
                res.json(ele);
            }
        })
    
})
app.put("/studlist/:id",function(req,res){
    for(let i=0;i<stud.length;i++)
    {
        if(stud[i].id==req.params.id)
        {
            stud[i]=req.body;
            stud[i].id=req.params.id
            res.json({msg:"success"})
            break;
        }
    }
})
app.delete("/studlist/:id",function(req,res){
    for(let i=0;i<stud.length;i++)
    {
        if(stud[i].id==req.params.id)
        {
            stud.splice(i,1);
            res.json({msg:"success"})
            break;
        }
    }
})
const port=process.env.PORT||'3000'
app.listen(port,()=>{
   console.log(`server started at ${port}`);
});
