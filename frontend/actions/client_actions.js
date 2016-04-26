var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchBenches: function() {
    ApiUtil.fetchBenches();
  },
  createBench: function(data) {
    ApiUtil.createBench(data);
  }
};

module.exports = ClientActions;
