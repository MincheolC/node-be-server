const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const { mysql } = require("../config/config");

const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  dialect: "mysql",
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
