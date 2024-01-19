const express=require('express');
const morgan = require('morgan');
const tourRouter=require('./routes/tourRoutes')
const categoryRouter=require('./routes/categoryRoutes')
const subcategoryRouter=require('./routes/subcategoryRoutes')
const vendorRouter=require('./routes/vendorRoutes')
const userRouter=require('./routes/userRoutes')
const app=express();
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(`${__dirname}/public`))
// app.all('*',(req,res,next)=>{
//     res.status(400).json({
//         status:fail,
//         message:`Can't find ${req.originalUrl} on the server`
//     })

// })


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
app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/category',categoryRouter)
app.use('/api/v1/subcat',subcategoryRouter)
app.use('/api/v1/vendor',vendorRouter)
app.use('/api/v1/user',userRouter)
//if use other than the specifies url routes

module.exports=app