const { Sequelize } = require("sequelize");

const { mysql } = require("./config/config");

const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
