// Update with your config settings.
const localPgConnection = {
  // this is dummy data since there is no pg db set up
  host: 'localhost', // or addy of pg server
  database: 'hobbits', // can name the db something diff from sqlite version
  user: 'student',
  password: 'hired'
}
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/hobbits.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  // local config
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  // heroku config
  production: {
    client: 'pg',
    connection: prodDbConnection,   // an obj or string
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }
};
