const parse = require('pg-connection-string').parse;
module.exports = ({ env }) => {

if(env('NODE_ENV') === 'production') {
  const config = parse(process.env.DATABSE_URL)
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: config.host,
          port: config.port,
          database: config.database,
          username: config.username,
          password: config.password
        },
        options: {
          ssl: false
        }
      }
    }
  }
}

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "strapi_api"),
          username: env("DATABASE_USERNAME", "postgres"),
          password: env("DATABASE_PASSWORD", "password051455"),
          ssl: env.bool("DATABASE_SSL", false),
        },
        options: {},
      },
    },
  };
};
