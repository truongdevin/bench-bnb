var ServerActions = require("../actions/server_actions");

var ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: '/api/benches',
      method: "GET",
      success: function(benches) {
        ServerActions.receiveAll(benches);
      },
      error: function(){
        console.log("YOU FUCKED UP");
      },
      dataType: "json"
    });
  }
};

module.exports = ApiUtil;
