const express=require('express');
const app=express();
const router=require('./routes/tasks.js');

app.use(express.json());
app.use('/api/tasks',router);


app.listen(5000,function(){
    console.log("Server is listening");
});