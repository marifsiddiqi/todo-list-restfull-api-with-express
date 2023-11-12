const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: "mysql",
    username: "root",
    password: "",
    database: "todo_sequelize"
});

module.exports = sequelize