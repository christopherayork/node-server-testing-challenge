// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/characters.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/characters-testing.sqlite3'
    },
    migrations: {
      directory: './data/migrations/testing'
    },
    seeds: {
      directory: './data/seeds/testing'
    }
  }

};
