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
  },
  createBench: function(data){
    $.ajax({
      url: '/api/benches',
      method: 'POST',
      data: {bench: data},
      success: function(bench) {
        ServerActions.receiveBench(bench);
      }
    });
  }
};

module.exports = ApiUtil;
