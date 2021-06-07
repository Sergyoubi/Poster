const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'your user_name',
  password: 'your password',
  host: 'localhost',
  port: 5432,
  database: 'your db_name'
});

module.exports = pool;
