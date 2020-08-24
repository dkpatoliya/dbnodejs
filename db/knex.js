var knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '2000',
      database : ''
    }
  });

module.exports =knex;