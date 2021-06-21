const express=require('express');
const app=express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
const connect=require('./connect/connect');
connect();
// routes
app.use('/users',require('./routes/user'))
app.use('/posts',require('./routes/post'))
const PORT=process.env.PORT|| 6000 
app.listen(PORT,(err)=>{err?console.log(err):console.log('the port is runing on port', PORT)})