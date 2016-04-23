var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench');
var ClientActions = require('../actions/client_actions');

var Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    var indexListener = BenchStore.addListener(this._onChange);
    ClientActions.fetchBenches();
  },

  _onChange: function() {
    this.setState( {benches: BenchStore.all() } );
  },

  render: function() {
    var benches = this.state.benches.map(function(bench){
      return <div key={bench.id}>{bench.description}</div>;
    });
    return (
      <div>{benches}</div>
    );
  }
});

module.exports = Index;
