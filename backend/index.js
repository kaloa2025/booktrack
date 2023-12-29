const express=require('express')
const app = express()
var cors=require('cors');

const port =5000
const mongoDB=require('./db')
mongoDB();
app.use((req,res,next)=>{
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.setHeader('Access-Control-Allow-Methods', 'POST');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');    
next();
})
app.get('/',(req,res)=>
{
    res.send("Hello")
})
app.use(cors());
app.use(express.json())
app.use('/api',require('./Routes/CreateUser'));
app.use('/api', require('./Routes/Bookmarks'));
app.use('/api',require('./Routes/DisplayData'));
app.listen(port,()=>
{
    console.log(`Example listening on ${port}`)
})