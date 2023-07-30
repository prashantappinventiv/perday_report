import {Model,DataTypes, IntegerDataType} from 'sequelize'
import {sequelize} from '../db_connection/db'
export class Category extends Model{
    public name!:string;
    public image!:Blob;
    public category_id!:Number;
    subcategory_id!:Number
    
}

Category.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    

    category_id:{
        type:DataTypes.NUMBER,
        primaryKey:true,
        autoIncrement:true
        
    },

    _id:{
        type:DataTypes.NUMBER,
         allowNull:false
         
    },
},
{
    sequelize,
    modelName:'Category'

})


