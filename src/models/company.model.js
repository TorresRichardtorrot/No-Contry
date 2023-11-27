import { DataTypes } from 'sequelize'
import { sequelize } from '../DB.js'
import { Products } from './product.model.js';
import { Employes } from './employe.model.js';
import { Seller } from './seller.model.js';

export const Company = sequelize.define('Company',{
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
    name:{
        type:DataTypes.STRING
     },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    category:{
        type:DataTypes.STRING
    },
    coutry:{
        type:DataTypes.STRING
    }
})

//? Relacion entre Company y Products
Company.hasMany(Products, { 
    foreignKey: 'companyID',
    sourceKey:'id'
});
Products.belongsTo(Company, {
    foreignKey: 'companyID',
    targetId:'id'
});


//? Relacion entre Company y Employes
Company.hasMany(Employes,{
    foreignKey: 'companyID',
    sourceKey:'id'
})
Employes.belongsTo(Company,{
    foreignKey: 'companyID',
    targetId:'id'
})

//? Relacion entre Company y Seller
Company.hasMany(Seller,{
    foreignKey: 'companyID',
    sourceKey:'id'
})
Seller.belongsTo(Company,{
    foreignKey: 'companyID',
    targetId:'id'
})