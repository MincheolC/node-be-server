const { getLinkPreview } = require("link-preview-js");

module.exports = {
  getUrl: async (req, res) => {
    console.log(req.query.url);
    const response = await getLinkPreview(req.query.url);
    res.send(response);
  },
};
module.exports.userController = require("./user.controller");
