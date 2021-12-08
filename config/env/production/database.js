const parse = require('pg-connection-string').parse;
const config = require(process.env.DATABASE_URL);

module.exports = ({ env }) => {

    if(env('NODE_ENV') === 'production'){
        const config = parse(process.env.DATABASE_URL)
        return {
            defaultConnection: 'default',
            connections: {
                default: {
                    connector: 'bookself',
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
    
};