const sequelize = require('./dbmodel');
const { DataTypes } = require('sequelize');

const UserType = sequelize.define('user_types', {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    is_active: {
        type: DataTypes.ENUM,
        values: [0, 1]
    },
});

module.exports = UserType;