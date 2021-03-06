var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench');
var ClientActions = require('../actions/client_actions');
var hashHistory = require('react-router').hashHistory;


var Map = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function(){
    this.listener = BenchStore.addListener(this._onChange);
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.listenForMove();
    this.listenForClick();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState( {benches: BenchStore.all()} );
    this.placeMarkers();
  },

  placeMarkers: function() {
    var pos;
    var self = this;
    this.state.benches.forEach(function(bench){
      pos = new google.maps.LatLng(bench.lat, bench.lng),
        marker = new google.maps.Marker({
          position: pos,
          map: self.map
        });
    })
  },

  listenForMove: function(){
    google.maps.event.addListener(this.map, 'idle', function() {
      ClientActions.fetchBenches();
    });
  },

  listenForClick: function(){
    var self = this;
    google.maps.event.addListener(this.map, 'click', function(e) {
        var lat = e.latLng.lat();
        var lng = e.latLng.lng();
        self._handleClick({lat: lat, lng: lng});
        console.log(lat + ', ' + lng);
    });
  },

  _handleClick: function(coords) {
    hashHistory.push({
      pathname: "benches/new",
      query: coords
    });
  },

  render: function () {
    return (
      <div>
        <span>MAP</span>
        <div id="map" ref='map'/>
      </div>
    );
  }
});

module.exports = Map;
