const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', '', {
    logging: console.log,
    dialect: 'mysql',
    define: {
        timestamps: false,
    },
    sync: true
});

module.exports = sequelize;