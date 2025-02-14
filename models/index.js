const sequelize = require("../config/database");
const Contact = require("./contact");

const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Database synced successfully");
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

module.exports = { Contact, syncDatabase };
