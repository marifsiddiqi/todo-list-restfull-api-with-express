const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: "mysql",
    username: "root",
    password: "",
    database: "todo_sequelize",
    define: {
        // Set timezone untuk createdAt dan updatedAt
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true,
        underscoredAll: true
    },
    timezone: '+07:00', // Jakarta timezone, UTC+7
});

module.exports = sequelize