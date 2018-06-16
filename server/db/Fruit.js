const Sequelize = require('sequelize');
const db = require('./database');

const Fruit = db.define('fruit', {
  itemName: {
    type: Sequelize.STRING,
    allowNull:false,
    validate: {
      notEmpty: true
    }
  },

  imgSrc: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },

  price: {
    type: Sequelize.DECIMAL(8,2)
  },

  quantityRemaining: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = Fruit;