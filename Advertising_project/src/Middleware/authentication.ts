

import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Session } from '../model/session_model';
import dotenv from 'dotenv';
dotenv.config();

const key = process.env.SECRET_KEY;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  try {
    const userdata = jwt.verify(token, 'PRASHANT')as JwtPayload
    const uid=userdata.payload
    const sessionDoc=await Session.findOne({where:{uid}});
    if(sessionDoc?.isActive=="true")
    {
        next();
    }
    else{
        res.send({message:"you are not loged in"})
    }
     
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
