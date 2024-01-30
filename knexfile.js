// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'bd_wiki',
      user: 'root',
      password: ''
    },
  },
production: {
  client: 'pg',
  connection: {
    host: 'dpg-cmjgpoud3nmc73chi6p0-a.oregon-postgres.render.com',
    port: 5432,
    user: 'dbwiki_user',
    password: '0XV810rBjlM40YUNuKTZljADrlpwSQH5',
    database: 'dbwiki',
    ssl: true
  }
}
};
