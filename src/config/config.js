const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const sequelizeMysqlConfig = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: 3306,
  dialect: "mysql",
  dialectOptions: {
    bigNumberStrings: true,
  },
};

module.exports = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,

  // sequelize configuration
  development: sequelizeMysqlConfig,
  test: sequelizeMysqlConfig,
  production: sequelizeMysqlConfig,
};
