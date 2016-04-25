var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = {};
var BenchStore = new Store(AppDispatcher);

var resetBenches = function(benches) {
  _benches = {};

  // probably not what we want
  benches.forEach(function(bench) {
    _benches[bench.id] = bench;
  });
};

var addBench = function(bench) {
  _benches[bench.id] = bench;
};

BenchStore.all = function () {
  //this was given to us
  // return Object.assign({}, _benches);
  //^^ is the original. This is just for fun.
  var benches = [];
  Object.keys(_benches).forEach(function(idx) {
    benches.push(_benches[idx]);
  });
  return benches;
};

BenchStore.__onDispatch = function (payload) {
  var result;
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      result = resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
    case BenchConstants.BENCH_RECEIVED:
      result = addBench(payload.bench);
      BenchStore.__emitChange();
  }
};

module.exports = BenchStore;

var React = require('react');
var PropTypes = React.PropTypes;
