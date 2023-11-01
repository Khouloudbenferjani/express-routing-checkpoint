const express = require("express")
const bodyParser = require("body-parser")
const dateCondition = require("./Middlewares/date")
const app=express()

const port = 3500

app.use(bodyParser())
//define route
app.get('/',(req,res)=>{
res.status(200).send("Hello 💥")
})



  app.get('/home',(req,res)=>{
    try {
      res.sendFile(__dirname+"/html/home.html",(err)=>{
        res.status(400).send("<h2>Sorry WRONG FILE</h2>")
    })}
    catch(error)
    {
      res.status(400).send("sorry not found....")
      console.log(error)
    }
  
      });
  

    app.get('/welcome',dateCondition,(req,res)=>{
      try {
        res.status(200).send("WELCOME EXPRESS 💥")
      }
      catch(error)
      {
        res.status(400).send("sorry not found....")
        console.log(error)
      }
    
        });

// POST METHODE

app.post('/',(req,res)=>
{
    if(req.body) {
    
    res.status(200).send("user added succefully")
    console.log(req.body);
    }
    else{
    res.status(200).send("wrong input")
}
}
)


// start server
app.listen(port,(err)=>{
  
if(err)
{
    console.log("error in server:",err);
}
    else
    {
        console.log(`server is running on .. http://localhost:${port}`);


    }
}
)
