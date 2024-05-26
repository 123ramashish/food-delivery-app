// Make your Middlewares Here
const temp_middleware = (req,res,next)=>{
    console.log("Hi from Middleware");
    next();
}


module.exports = {temp_middleware}