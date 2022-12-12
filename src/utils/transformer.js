const _ = require("lodash");

function convertKeysToSnakeCase(m) {
  return _.toPairs(m).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [_.snakeCase(key)]: value,
    }),
    {}
  );
}

module.exports = {
  convertKeysToSnakeCase,
};
