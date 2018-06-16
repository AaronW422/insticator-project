'use strict'

const router = require('express').Router();
const { Fruit } = require('../db');

router.get('/fruits', (req, res, next) => {
  Fruit.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })
    .then(fruits => res.json(fruits.sort( (val1, val2) => val1.id - val2.id)))
    .catch(next);
});

router.put('/fruits/:itemID', (req, res, next) => {
  const {newQuantity} = req.body;
  
  Fruit.findById(req.params.itemID)
    .then(fruit => fruit.update({
      quantityRemaining: newQuantity
    }))
    .then(updatedFruit => res.json(updatedFruit))
    .catch(next)
});

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;