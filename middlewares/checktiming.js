//timingmiddleware
const path=require('path');
const checktiming =(req,res,next)=>{
    let now = new Date();
    let day = now.getDay();
    console.log(day);
    let hour   = now.getHours();
    console.log(hour);
    if(hour > 17 || hour < 9 || day === 0 || day === 6) {
        var parentDir = path.normalize(__dirname+"/..");
        res.sendFile(path.join(parentDir+'/public/closed.html'))
       console.log( "dir",parentDir+'/public/closed.html');
    }
    else next();
    console.log(path.join(__dirname + 'Public/closed.html'));
}

module.exports = checktiming;