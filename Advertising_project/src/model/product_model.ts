import {Model,DataTypes} from 'sequelize'
import { sequelize } from '../db_connection/db'
import User from './signup_model'
import { Category } from './category_model';
import { Address } from './address_model';


export class Product extends Model{
    product_id!:number;
    public product_name!:string;
    public description!:string;
    public image!:string;
    public bidding!:number;
    public baseprice!:number;
    public userid!:string;
    public categoryid!:string;
    public address_id:string;
}

Product.init({
    product_id:{
        type:DataTypes.STRING,
        primaryKey:true

    },
    product_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING
        
    },
    baseprice:{
        type:DataTypes.STRING
    }
},
{
    sequelize,
    modelName:'Product'

    
})
Product.belongsTo(User, {
    foreignKey: 'id', 
  });
  
  Product.belongsTo(Category, {
    foreignKey: 'category_id', 
  });
  
  Product.belongsTo(Address, {
    foreignKey:'addressid'
  });