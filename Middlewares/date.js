const dateCondition = (req,res,next)=>{

 const date = new Date ()
 const hour = date.getHours();

 console.log(date)
 if (hour > 9 && hour< 22) {
    next()
 }else{
    return res.status(403).send("Arja3 ghodwa sahbi")
 }

}



module.exports = dateCondition
