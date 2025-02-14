require("dotenv").config();
const express = require("express");
const app = express();
const contactRoutes = require("./routes/contact");
const { syncDatabase } = require("./models");

app.use(express.json());
app.use("/api", contactRoutes);

syncDatabase();

const PORT = process.env.DB_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
