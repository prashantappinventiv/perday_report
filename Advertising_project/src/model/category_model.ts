import {Model,DataTypes} from 'sequelize'
import {sequelize} from '../db_connection/db'
export class Category extends Model{
    public name!:string;
    public image!:Blob;
    public category_id:BigInteger;
    subcategory_id:BigInteger;
    
}

Category.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.BLOB
    },

    category_id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
        
    },

    _id:{
        type:DataTypes.BIGINT,
         allowNull:false
         
    },
},
{
    sequelize,
    modelName:'Category'

})


