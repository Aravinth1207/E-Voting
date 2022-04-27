
const dbConfig = require('../config/config.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialet,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});


const db = {};


db.Sequelize = Sequelize; // for using Sequelize
db.sequelize = sequelize;   // for using sequelize

db.User = require('./user.js')(sequelize, DataTypes) // create a new instance of the model


db.sequelize.sync({ force: false }) // force: true will drop the table if it already exists
    .then(() => {
        console.log('Resync done');
    })

module.exports = db;