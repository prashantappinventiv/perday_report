import express,{Request,Response} from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import *as dotenv from 'dotenv'
import User from '../model/signup_model';
import { Session } from '../model/session_model';

dotenv.config();
//const SECRET_KEY=process.env.SECRET_KEY;

export const loginuser=async(req:Request,res:Response)=>{
    
    
    try{
     
        
        const data =req.body;
        console.log("before user")
        const user=await User.findOne({where:{email:data.email}})
        console.log(user)
        if(!user)
        {
            
            console.log("user not registered please register the user")
            return res.send({message:"invalid credential"})
        }
      
    const password_compare=await bcrypt.compare(data.password,user.password)
    console.log("before jwt")
    const accesstoken=jwt.sign({email:data.email},'PRASHANT',{expiresIn:'10d'})
      console.log(accesstoken)

      const create=await Session.findOne({where:{email:data.email,isActive:"true"}})
      console.log("inside session")
      if(!(create)){
        await Session.create({
            email:data.email,
            isActive:"true",
        })
      }
                
    return res.send({message:"successsful login"})
    }
    catch(err)
    {
        console.log("inside catch");
        console.log(err)
      
    }
}
