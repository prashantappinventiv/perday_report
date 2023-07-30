// import { Product } from "../model/product_model";
// import fs from "fs"
// import Image from "../model/image_model";
// import {Request,Response} from 'express'

// class userProduct{
//     async addProduct(req:Request,res:Response){
//         try{
//             const user_id=req.body.id;
//             const {name,description,base_price,category_id,address_id}=req.body;
//             const result=await Product.create({name:name,description:description,base_price:base_price,category_id:category_id,address_id:address_id})
//             return res.status(200).send("product added successfully")
//         }
//         catch(err){
//             console.log(err)
//             return res.status(400).send("improper details")
//         }
//     }

//     async addImage(req:Request,res:Response){
//         try{
//             const {product_id}=req.body
//             const {user_id}=req.body.id
            
//         }
//         catch{}
//     }

//     async viewProduct(req:Request,res:Response){
//         try{
//             const id=req.body.id;
//                 const result=await Product.findOne({where:{id:id}})
//                 return res.status(200).send(result)
//         }
//         catch(err){
//             res.status(400).send("internal server error")
//             console.log(err)
//         }
//     }
    
// }