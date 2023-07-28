'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('categories', [{
        name: "electronics",
        image:"",
        category_id:1,
        parent_id:null
     },
    {
      name: "fashion",
      image:"",
      category_id:2,
      parent_id:null

    },
    {
      name: "furniture",
        image:"",
        category_id:3,
        parent_id:null
    },
    {
      name: "movies",
        image:"",
        category_id:4,
        parent_id:null
    },
    {
      name: "TV",
        image:"",
        category_id:1,
        parent_id:1
    },
    {
      name: "Refregerator",
        image:"",
        category_id:1,
        parent_id:1
    },
    {
      name: "shirt",
        image:"",
        category_id:1,
        parent_id:2
    },
    {
      name: "jeans",
        image:"",
        category_id:2,
        parent_id:2
    },
    {
      name: "jacket",
        image:"",
        category_id:3,
        parent_id:2
    },
    {
      name: "bed",
        image:"",
        category_id:1,
        parent_id:3
    },
    {
      name: "sofa",
        image:"",
        category_id:2,
        parent_id:3
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
  }
};
