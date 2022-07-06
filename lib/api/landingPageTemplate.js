var _ = require("lodash"),
  Promise = require("bluebird"),
  util = require("../util"),
  qs = require("querystring"),
  log = util.logger();

function LandingPageTemplate(marketo, connection) {
  this._marketo = marketo;
  this._connection = connection;
}

LandingPageTemplate.prototype = {
  getById: function (landingPageTemplateId, isDraft) {
    var path = util.createAssetPath(
      `landingPageTemplate/${landingPageTemplateId}.json`
    );
    if (isDraft) {
      path = `${path}?status=draft`;
    } else {
      path = `${path}?status=approved`;
    }
    options = _.extend(
      {},
      {
        _method: "GET",
      }
    );
    return this._connection.get(path, { data: options });
  },
};

module.exports = LandingPageTemplate;
