import express from "express";//const express=require('express')
import cors from 'cors'
import mongoConnection from "./Db.js";
import expenseRouter from './routes/expenseRoutes.js'
const app = express();

//midleware
app.use(express.json())
app.use(cors())

mongoConnection();

app.get('/test',(req,res)=>{
    res.send("Hi iam backend")
})

const Port=7000;

app.use('/expense',expenseRouter);

app.listen(Port,()=>{
    console.log("backend is running on port"+Port)
})