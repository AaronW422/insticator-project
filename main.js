'use strict'

const { db } = require('./server/db');
const app = require('./server');
const PORT = 2020;

db.sync()
  .then(() => {
    console.log('DB synced...')
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  });
