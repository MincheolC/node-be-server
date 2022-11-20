const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  /**
   * 유저 객체
   */
  class User extends Model {}

  User.init(
    {
      uuid: DataTypes.UUID,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.INTEGER,
      email_verified: DataTypes.INTEGER,
      address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return User;
};
