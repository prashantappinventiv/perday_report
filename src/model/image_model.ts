// import {Model,DataTypes} from 'sequelize'
// import { sequelize } from '../db_connection/db'
// export class Image extends Model{
//     public id!:BigInteger;
//     public image!:Blob;
//     public user_id!:BigInteger;
//     public product_id!:BigInteger;
// }

// Image.init({
//     id:{
//         type:DataTypes.BIGINT,
//         autoIncrement:true,
//         primaryKey:true,
//     },
//     image:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     user_id:{
//         type:DataTypes.BIGINT,
//         allowNull:false,
//     },
//     product_id:{
//         type:DataTypes.BIGINT,
//         allowNull:false,
//         references:{
//             model:Product,
//             key:'id'
//         }
//     }
// },
// {
//     sequelize,
//     modelName:'Image'
// }
// )
// Product.hasMany(image);
// Image.belongsTo(Product,{foreignKey:'product_id'})
// export default Image