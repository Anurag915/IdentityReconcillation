const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Contact = sequelize.define("Contact", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    phoneNumber: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: true },
    linkedId: { type: DataTypes.INTEGER, allowNull: true },
    linkPrecedence: { type: DataTypes.ENUM("primary", "secondary"), allowNull: false },
});

module.exports = Contact;
