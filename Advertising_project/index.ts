import express from 'express'
import * as dotenv from 'dotenv';
import { postgres_connect } from './src/db_connection/db';
import authRouter from './src/routes/signup_route';
import login from './src/routes/login_route';
import logout from './src/routes/logout_route';

postgres_connect();
dotenv.config()
console.log("server start")
const port=process.env.PORT;
const app=express()
app.use(express.json())
app.use('/',authRouter)
app.use('/',login)
app.use('/',logout)
app.listen(port,()=>{
    console.log("port is connected",`${port}`)
   
})