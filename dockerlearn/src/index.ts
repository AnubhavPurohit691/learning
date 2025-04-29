import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const prisma = new PrismaClient()

app.post("/",async(req,res)=>{
    await prisma.user.create({
        data:{
            name:"John",
            email:`${Math.random()}@gmail.com`,
            password:"123456"
        }
    })
    res.json({message:"User created"})  
})

app.get("/",async(req,res)=>{
    const users = await prisma.user.findMany()
    res.json(users)
})



app.listen(3000,()=>{
    console.log("server is running on port 3000")
})