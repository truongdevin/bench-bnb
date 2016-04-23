var React = require("react");
var ReactDOM = require("react-dom");
var Index = require("./components/index");
var Search = require("./components/search");

// BenchStore = require("./stores/bench");
// ApiUtil = require("./util/api_util");

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Search/>, document.getElementById("root")
  );
});
