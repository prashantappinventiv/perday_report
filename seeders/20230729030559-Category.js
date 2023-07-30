'use strict';

/** @type {import('sequelize-cli').Migration} */
const fs=require('fs')
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Categories', [{
        name: "electronics",
        
        category_id:1,
        _id:null
     },
    {
      name: "fashion",
     
      category_id:2,
      _id:null

    },
    {
      name: "furniture",
        
        category_id:3,
        _id:null
    },
    {
      name: "movies",
       
        category_id:4,
        _id:null
    },
    {
      name: "TV",
       
        category_id:5,
        _id:1
    },
    {
      name: "Refregerator",
        
        category_id:6,
       _id:1
    },
    {
      name: "shirt",
       
        category_id:7,
        _id:2
    },
    {
      name: "jeans",
      
        category_id:8,
       _id:2
    },
    {
      name: "jacket",
        
        category_id:9,
        _id:2
    },
    {
      name: "bed",
        
        category_id:10,
       _id:3
    },
    {
      name: "sofa",
       
        category_id:11,
        _id:3
    }
  
  
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
