const express=require('express');
const morgan = require('morgan');
const rateLimit=require('express-rate-limit')
const cors=require('cors')
const AppError=require('./utils/appError')
const globalErrorHandler=require('./controllers/errorController')
const gparentRouter=require('././routes/gparentcategoryroutes')
const tourRouter=require('./routes/tourRoutes')
const categoryRouter=require('./routes/categoryRoutes')
const subcategoryRouter=require('./routes/subcategoryRoutes')
const vendorRouter=require('./routes/vendorRoutes')
const userRouter=require('./routes/userRoutes')
const app=express();
app.use(cors(
    {
        origin:"*",
        method: ["GET", "POST", "PUT", "DELETE"],
    }
))
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(`${__dirname}/public`))
app.use((req,res,next)=>{
    req.requestTime=new Date().toISOString()
    next()
})

const limiter=rateLimit({
    max:100,
    windowMs:60*60*1000,
    message:'Too many requests from this Ip , please try again in an hour'
})

app.use((req,res,next)=>{
    console.log('Hello from middle ware')
    next();
})
app.get('/',(req,res)=>{
    res.status(200).send("Hello from server side")
})
// app.post('/api/v1/tours',(req,res)=>{
//     console.log(req.body)
//     res.send('Done')
// })
//Routes
app.use('/api',limiter)
app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/category',categoryRouter)
app.use('/api/v1/subcat',subcategoryRouter)
app.use('/api/v1/vendor',vendorRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/gparentcat',gparentRouter)

app.all('*',(req,res,next)=>{
    res.status(400).json({
        status:fail,
        message:`Can't find ${req.originalUrl} on the server`
    })

})
//if use other than the specifies url routes
app.use(globalErrorHandler)
module.exports=app