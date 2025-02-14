require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "mysql-154e5ccd-anuragprajapati02005-7654.h.aivencloud.com",
    dialect: "mysql",
    logging: false,
});

module.exports = sequelize;
