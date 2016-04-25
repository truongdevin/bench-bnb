var React = require('react');
var BenchStore = require('../stores/bench');
var ClientActions = require('../actions/client_actions');
var hashHistory = require('react-router').hashHistory;

var BenchForm = React.createClass({
  getInitialState: function() {
    return {
      description: "",
      lat: "",
      lng: ""
    };
  },

  descriptionChange: function(e) {
    e.preventDefault();
    this.setState({description: e.target.value});
  },

  latitudeChange: function(e) {
    e.preventDefault();
    this.setState({lat: e.target.value});
  },

  longitudeChange: function(e) {
    e.preventDefault();
    this.setState({lng: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ClientActions.createBench(this.state);
    // this.setState({
    //   description: "",
    //   lat: "",
    //   lng: ""
    // });
    hashHistory.push('/');
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Description
          <input
            type="text"
            value={this.state.description}
            onChange={this.descriptionChange}/>
        </label>

        <br/>
        <label> Latitude
          <input
            type="text"
            value={this.state.lat}
            onChange={this.latitudeChange}/>
        </label>

        <br/>
        <label> Longitude
          <input
            type="text"
            value={this.state.lng}
            onChange={this.longitudeChange}/>
        </label>

        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
});

module.exports = BenchForm;
