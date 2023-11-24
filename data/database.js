const mysql = require('mysql2/promise'); //require = import and store in variable

const pool = mysql.createPool({  //mysql object uses creatPool method to connect to the database
  host: 'localhost',
  database: 'blog',
  user:'root',
  password: 'Password123#@!'
});

module.exports = pool;