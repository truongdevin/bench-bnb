var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./map');
var Index = require('./index');

var Search = React.createClass({
  render: function () {
    return (
      <div>
        <Map/>
        <Index/>
      </div>
    )
  }
})

module.exports = Search;
