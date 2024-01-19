const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=require('./app')
dotenv.config({path:'./config.env'});
const DB=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(con=>{
    console.log(con.connections)
    console.log('DB connection successful');

});

// const testTour=new Tour(
//     {
//         name:"The forest",
//         rating:3.5,
//         price:890
//     }
// );
// testTour.save().then(doc=>{
//     console.log(doc)
// }).catch(err=>{
//     console.log("Error:",err)
// });

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`App runningg on port ${port}`)
})