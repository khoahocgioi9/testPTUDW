import knexObj from 'knex';

const knex = knexObj({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 8889,
    user: 'root',
    password: '',
    database: 'ecdb'
  },
  pool: { min: 0, max: 10 }
});

export default knex;