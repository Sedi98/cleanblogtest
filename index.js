const express= require('express');
const path =require('path')
const app=express();
const port= 3000;
// const blog = { id: 1, title: "Blog title", description: "Blog description" };
app.use(express.static('public'));

const ejs = require('ejs')

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('index')
    

})



app.get('/about',(req,res)=>{
    
    res.render('about')

})

app.get('/add_post',(req,res)=>{
    
    res.render('add_post')

})

app.get('/post',(req,res)=>{
    
    res.render('post')

})

app.listen(port, ()=>{
    console.log(`server started at ${port}`)
})