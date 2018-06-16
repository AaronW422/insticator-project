const Promise = require('bluebird');
const { db } = require('../server/db');
const Fruit = require('../server/db/Fruit');
const data = require('./store_items.json');

db.sync({ force: true })
  .then(function () {
    console.log('DB synced...')
    console.log('Seeding...');
    return Promise.map(data, (fruit) => { Fruit.create(fruit); })
  })
  .then(function () {
    console.log('Finished seeding DB.');
  })
  .catch(function (err) {
    console.error('Error:', err, err.stack);
  })