var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = {};
var BenchStore = new Store(AppDispatcher);

var resetBenches = function(benches) {
  _benches = {};

  // probably not what we want
  benches.forEach(function(bench) {
    _benches[bench.id] = bench.description;
  });

  // _benches = benches;  // will probably change this to something else
};

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
      break;
  }
};

module.exports = BenchStore;

var React = require('react');
var PropTypes = React.PropTypes;
