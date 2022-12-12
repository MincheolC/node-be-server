const models = require("../models");
const { convertKeysToSnakeCase } = require("../utils/transformer");

const getUsers = async (req, res) => {
  const users = await models.user.findAll({ raw: true });
  res.send(users.map((v) => convertKeysToSnakeCase(v)));
};

module.exports = {
  getUsers,
};
