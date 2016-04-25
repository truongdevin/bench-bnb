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

  componentDidMount: function() {
    this.setState({
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng
    });
  },

  descriptionChange: function(e) {
    e.preventDefault();
    this.setState({description: e.target.value});
  },

  // no longer used. prefills using query string passed in
  latitudeChange: function(e) {
    e.preventDefault();
    this.setState({lat: e.target.value});
  },

  // no longer used. prefills using query string passed in
  longitudeChange: function(e) {
    e.preventDefault();
    this.setState({lng: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ClientActions.createBench(this.state);
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
            disabled="true"
            type="text"
            value={this.props.location.query.lat}
            onChange={this.latitudeChange}/>
        </label>

        <br/>
        <label> Longitude
          <input
            disabled
            type="text"
            value={this.props.location.query.lng}
            onChange={this.longitudeChange}/>
        </label>

        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
});

module.exports = BenchForm;
