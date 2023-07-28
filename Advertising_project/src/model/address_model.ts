import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../db_connection/db'
import { EnumType } from 'typescript';

export class Address extends Model {
    public addressid!: string
    public addressline1!: string;
    public addressline2!: string;
    public area!: string;
    public zipcode!: BigInteger;

    public city!: string;


    public state!: string;
    public country!: String;
    public status!: EnumType;
    public addresstype!: EnumType


}

Address.init({
    addressline1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressline2: {
        type: DataTypes.STRING
    },
    area: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    zipcode: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    addressid: {
        type: DataTypes.STRING,
        primaryKey: true
    }
},
    {
        sequelize,
        modelName: 'Address'

    });